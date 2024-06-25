import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {

    interface User {
        email: string;
        username: string;
        role: string[];
        gender: string;
        address: string
        cpf: string
        birthday: Date
        cep: string
        locality_city: string
        state: string
        country: string
        celphone: string
        token: string;
    }

    interface Session extends DefaultSession {
        user: User;
        accessToken: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        user: User;
        accessToken: string; // Adiciona o accessToken no JWT
    }
}
