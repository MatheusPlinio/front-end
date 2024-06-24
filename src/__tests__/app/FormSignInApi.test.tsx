import FormSignIn from "@/app/formSignIn"
import { Toaster } from "@/components/ui/toaster"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { signIn } from "next-auth/react"

jest.mock('next-auth/react')

describe('Form Sign In', () => {
    it('should call signin API with correct data', async () => {
        render(<FormSignIn />)

        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'cliente@youdrive.com' } })
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } })
        fireEvent.submit(screen.getByRole('button', { name: /Sign In/i }))

        await waitFor(() => {
            expect(signIn).toHaveBeenCalledWith('credentials', {
                redirect: false,
                email: 'cliente@youdrive.com',
                password: 'password'
            })
        })
    })
})

describe("Form Sign In Error Handling", () => {
    it("should display error message on failed login", async () => {
        (signIn as jest.Mock).mockResolvedValueOnce({ error: "Invalid credentials" });

        render(<FormSignIn />);
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "user@example.com" } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "password" } });
        fireEvent.submit(screen.getByRole("button", { name: /Sign In/i }));

        await waitFor(() => {
            render(<Toaster />)
            expect(screen.getByText(/There was a problem with you email or password/i)).toBeInTheDocument();
        });
    });
});