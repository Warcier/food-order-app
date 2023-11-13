"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { toast } from "@/components/ui/use-toast"
export default function RegisterForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [programme, setProgramme] = useState("");
    const [year, setYear] = useState("");
    const [studentID, setStudentID] = useState("");
    const [error, setError] = useState("");

    let router = useRouter();

    async function handleSubmit(e: any) {

        if (!name || !email || !pwd || !programme || !year || !studentID) {
            setError("All fields are necessary.");
            return;
        }

        try {
             e.preventDefault();

            console.log(name, email, pwd, programme, year, studentID)

            const resUserExists = await fetch("api/userExist/route", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const { user }: any = await resUserExists.json();

            if (user) {
                // Toast Status
                toast({
                    title: "User already exists"
                })
                return;
            }

            const res = await fetch("api/register/route", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: pwd,
                    programme: programme,
                    year: year,
                    StudentID: studentID,
                }),
            });




            if (res.ok) {

                // const form = e.target;
                // form.reset();

                // Toast Status
                toast({
                    title: "Registered"
                })
                router.push("/");
            } else {
                console.log("User registration failed.");
            }

        } catch (error) {
            console.log(e);
        }
    }


    return (
        <>
            <form className="max-w-md mx-auto mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold mb-6">Register</h2>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Name:
                    </label>

                    <input
                        type="text"
                        className="block w-full p-2 border border-gray-300 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email:
                    </label>

                    <input
                        type="email"
                        className="block w-full p-2 border border-gray-300 rounded"
                        value={email}
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
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Programme:
                    </label>

                    <input
                        type="text"
                        className="block w-full p-2 border border-gray-300 rounded"
                        value={programme}
                        onChange={(e) => setProgramme(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Year:
                    </label>

                    <input
                        type="text"
                        className="block w-full p-2 border border-gray-300 rounded"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Student ID:
                    </label>

                    <input
                        type="text"
                        className="block w-full p-2 border border-gray-300 rounded"
                        value={studentID}
                        onChange={(e) => setStudentID(e.target.value)}
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
