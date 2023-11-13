/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client"

import Image from "next/image"
import "/src/app/menu.css";
import {signOut, useSession} from "next-auth/react";

export default  function Homepage() {
    const {data: session} = useSession();


    return (
        <div>
            <main>
                <header>
                    <nav>

                        <ul>
                            <li><a>User: <span className="font-bold">{session?.user?.name}</span></a></li>
                            <li><a href="/order">Order</a></li>
                            <li><a href="https://www.hsu.edu.hk/en/admissions/">Recent Order</a></li>

                            <li>
                                <button
                                    onClick={() => {
                                        signOut({callbackUrl: '/'})
                                    }}
                                    className="bg-red-500 text-white font-bold px-6 "
                                >
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    </nav>
                </header>

                <section className="news">
                    <h2>Welcome to HSUHK Rendezvous</h2>
                    <p>Opening Hours: 8am to 7:30pm</p>
                    <p><a href="######">Explore the menu</a></p>
                </section>


                <section className="recommendations">
                    <Image src="/images/p2.webp" alt="Grilled Eel over rice" width={500} height={300}/>
                    <div className="info">
                        <h2><i>Chef&apos;s Recommendations</i></h2>
                        <h3>✔✔ Grilled Eel Over Rice</h3>
                        <br/><h3>$64</h3>
                    </div>

                </section>

                <section className="product1">
                    <div>
                        <Image src="/images/p3.jpg" alt="Italian diavola pizza" width={500} height={300}/>
                        <h3>Italian diavola pizza</h3>
                        <h3>$55</h3>
                    </div>
                    <div>
                        <Image src="/images/p4.jpg" alt="Egg spaghetti bolognese" width={500} height={300}/>
                        <h3>Egg spaghetti bolognese</h3>
                        <h3>$46</h3>
                    </div>
                    <div>
                        <Image src="/images/p5.jpg" alt="Beef fried rice noodles" width={500} height={300}/>
                        <h3>Beef fried rice noodles</h3>
                        <h3>$50</h3>
                    </div>
                    <div>
                        <Image src="/images/p6.jpg" alt="Curry chicken rice" width={500} height={300}/>
                        <h3>Curry chicken rice</h3>
                        <h3>$42</h3>
                    </div>

                </section>

                <section className="product2">
                    <div>
                        <Image src="/images/p7.jpg" alt="Teppan sirloin rice" width={500} height={300}/>
                        <h3>Teppan sirloin rice</h3>
                        <h3>$65</h3>
                    </div>
                    <div>
                        <Image src="/images/p8.jpg" alt="Mix fruit salad" width={500} height={300}/>
                        <h3>Mix fruit salad</h3>
                        <h3>$30</h3>
                    </div>
                    <div>
                        <Image src="/images/p9.jpg" alt="Pineapple pork chop burger" width={500} height={300}/>
                        <h3>Pineapple pork chop burger</h3>
                        <h3>$35</h3>
                    </div>
                    <div>
                        <Image src="/images/p10.jpg" alt="Corned beef and egg sandwich" width={500} height={300}/>
                        <h3>Corned beef and egg sandwich</h3>
                        <h3>$35</h3>
                    </div>

                </section>

                <section className="feedback">
                    <p>Please tell us your valuable feedback, we will strive to do our best!</p>
                    <form>
                        <input type="text" placeholder="Type here..." required/>
                        <button type="submit">Send</button>
                    </form>
                </section>
            </main>
            <footer>
                <p>Copyright © 2023 HSUHK Rendezvous All Rights Reserved.</p>
            </footer>
        </div>
    )

}
    
