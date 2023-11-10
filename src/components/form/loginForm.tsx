import React, { useState } from "react";

export default function RegisterForm() {

    const handleSubmit = () => async (e: any) => {
        e.preventDefault();

        try {

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
