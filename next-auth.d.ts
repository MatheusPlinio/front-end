import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {

    interface User {
        email: string;
        username: string;
        role: string[];
        gender: string;
        address: string;
        cep: string;
        locality_city: string;
        state: string;
        cellphone: string;
        token: string; // Adicionei o campo token aqui para armazenar o JWT
    }

    interface Session extends DefaultSession {
        user: User;
        accessToken: string; // Adiciona o accessToken na sessão
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        user: User;
        accessToken: string; // Adiciona o accessToken no JWT
    }
}
