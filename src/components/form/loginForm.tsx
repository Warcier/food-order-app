"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { toast } from "@/components/ui/use-toast"
import {signIn} from "next-auth/react";
export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [error, setError] = useState("");

    let router = useRouter();

    async function handleSubmit(e: any) {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email,
                pwd,
                redirect: false,
            });

            console.log(res)
            // @ts-ignore
            if (res.error) {
                setError("Invalid Credentials");
                return;
            }

            router.replace("/home");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <form className="max-w-md mx-auto mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold mb-6">Login</h2>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email:
                    </label>

                    <input
                        type="email"
                        className="block w-full p-2 border border-gray-300 rounded"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Password:
                    </label>

                    <input
                        type="password"
                        className="block w-full p-2 border border-gray-300 rounded"
                        onChange={(e) => setPwd(e.target.value)}
                        required
                    />
                </div>

                {error && (
                    <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                        {error}
                    </div>
                )}

                <div className="flex flex-col items-center">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900"
                    >
                        Submit
                    </button>
                </div>



            </form>
        </>
    );
}
