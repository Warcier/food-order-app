import connectMongoDB from "@/lib/Mongodb";
import User from "@/models/register";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import {NextAuthOptions} from "next-auth";

export const authOptions: NextAuthOptions  = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                // @ts-ignore
                const { email, pwd } = credentials;

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });
                    const passwordsMatch = pwd == user.password

                    if (!user || !passwordsMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
};

// @ts-ignore
export default NextAuth(authOptions);

