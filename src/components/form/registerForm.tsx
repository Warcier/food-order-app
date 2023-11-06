 import React, { useState } from "react";

export default function RegisterForm() {
    
    // Testing purpose
    let test_obj = {
                name:'Lowe Jessica',
                email: 's245663@hsu.edu.hk',
                password: '123456789',
                programme: 'Computer Science',
                year: 3,
                StudentID: 's245663',
            }



    const handleSubmit = () => async (e: any) => {
        e.preventDefault();

        try {
            await fetch('/api/register/route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(test_obj),
            });
            console.log('Sent')
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <button onClick={handleSubmit()}>Register</button>
        </>

    );
}
