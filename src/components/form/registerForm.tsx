"use client";

import React, {useEffect, useState} from "react";
import { useRouter } from 'next/navigation';
import { toast } from "@/components/ui/use-toast"
export default function RegisterForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [programme, setProgramme] = useState("");
    const [year, setYear] = useState("1");
    const [studentID, setStudentID] = useState("");
    const [error, setError] = useState("");
    const [isStudent, setIsStudent] = useState(true);

    let router = useRouter();

    async function handleSubmit(e: any) {

        if (!name || !email || !pwd ) {
            setError("All fields are necessary.");
            return;
        }

        if (isStudent) {
            if (!studentID || !programme || !year) {
                setError("All student fields are necessary.");
                return;
            }
        }
        else{
            setStudentID("Nil")
            setYear("Nil")
            setProgramme("Nil")
        }

        try {
             e.preventDefault();

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
                    studentID: studentID,
                    programme: programme,
                    year: year,

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
            <div className="bg-[url('/images/p11.jpg')] bg-cover bg-center h-[120vh]">
            <header className="bg-white p-2 grid grid-cols-3 items-center mb-2 rounded-lg shadow-md">
                <img src="/images/hsu_logo.png" alt="HSU Logo" className="w-auto h-auto col-span-1" />
                <h1 className="text-2xl font-bold text-green-700 center col-span-2">Sign Up to Create An Account</h1>
            </header>
            
            <form className="max-w-md mx-auto mt-8 bg-white shadow-md rounded px-8 pt-6 pb-4" onSubmit={handleSubmit}>
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
                        Are you a student?
                    </label>
                    <input type="radio" name="radio-1" className="radio" onChange={() => setIsStudent(true)}/>
                    <label> Yes</label>
                    <br/>
                    <input type="radio" name="radio-1" className="radio" onChange={() => setIsStudent(false)}/>
                    <label> No</label>


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
                        disabled={!isStudent}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Programme:
                    </label>
                    <select onChange={(e) => setProgramme(e.target.value)} disabled={!isStudent}>
                        <option value="School of Business">School of Business</option>
                        <option value="School of Communication">School of Communication</option>
                        <option value="School of Humanities and Social Science">School of Humanities and Social Science</option>
                        <option value="School of Translation and Foreign Languages">School of Translation and Foreign Languages</option>
                        <option value="School of School of Decision Science">School of School of Decision Science</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Year:
                    </label>
                    <select onChange={(e) => setYear(e.target.value)} disabled={!isStudent}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
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
            </div>
        </>
    );
}
