import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "./db";

export const authOptions:NextAuthOptions = {
    providers: [
       CredentialsProvider({
        name: "Credentials",
        credentials: {
              email: {label: "Email", type: "text"},
              password: {label: "Password", type: "password"}
        },

        async authorize(credentials) {
            if(!credentials?.email || !credentials?.password) {
                throw new Error("Email and password are required");
            }

            try {
                await connectToDatabase();
                
            }catch (error) {
                console.log("Database connection error:", error);
            }
        }
       })
    ]
}