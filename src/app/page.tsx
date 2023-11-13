

import LoginForm from "@/components/form/loginForm";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

 async function Home() {

     const getSession = await getServerSession(authOptions).then(session => {
         if (session) {
             redirect("/home");
         }
     });


    return (
        <>
            <main>
                <div>
                    <LoginForm/>
                </div>
            </main>
        </>
    )
}

export default Home;