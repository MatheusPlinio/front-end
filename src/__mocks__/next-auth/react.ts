// import { signIn as originalSignIn, signOut as originalSignOut } from "next-auth/react";

const mockSignIn = jest.fn();
const mockSignOut = jest.fn();

module.exports = {
    ...jest.requireActual('next-auth/react'),
    signIn: mockSignIn,
    signOut: mockSignOut
}