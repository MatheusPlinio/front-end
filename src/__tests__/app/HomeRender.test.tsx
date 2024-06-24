import Home from "@/app/page"
import { render, screen } from "@testing-library/react"


describe('Sign In Page', () => {
    it('should render form login', () => {
        render(<Home />)
        const inputEmail = screen.getByLabelText(/email/i)
        const inputPassword = screen.getByLabelText(/password/i)
        const Button = screen.getByRole('button', {name: /Sign In/i})

        expect(inputEmail).toBeInTheDocument()
        expect(inputPassword).toBeInTheDocument()
        expect(Button).toBeInTheDocument()
    })
})