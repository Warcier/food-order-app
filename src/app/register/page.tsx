
import RegisterForm from "@/components/form/registerForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

 async function Register() {

    const getSession = await getServerSession(authOptions).then(session => {
        if (session) {
            redirect("/home");
        }
    });

    return <RegisterForm />;
}

export default Register;