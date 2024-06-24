import FormSignIn from "@/app/formSignIn"
import { fireEvent, render, screen } from "@testing-library/react"

const setup = () => {
    const utils = render(<FormSignIn />)
    const inputEmail = screen.getByLabelText(/email/i)
    const inputPassword = screen.getByLabelText(/password/i)
    return {
        inputEmail,
        inputPassword,
        ...utils,
    }
}

describe('Form Signin Interections', () => {
    it('should allow user to type email and passwords fields', () => {
        const { inputEmail } = setup()
        const { inputPassword } = setup()

        fireEvent.change(inputEmail, { target: { value: 'user@example.com' } })
        fireEvent.change(inputPassword, { target: { value: 'password' } })
        expect(inputEmail).toHaveValue('user@example.com')
        expect(inputPassword).toHaveValue('password')
    })
})