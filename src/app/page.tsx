"use client"
import {OrderFormUI} from "@/components/form/OrderFormUI";
import Homepage from "@/components/Home/page";
import Order from "@/model/order";
export default function Home() {
  return (
    <main>
         <div>
          <Homepage />
         </div>

        <div>
          <OrderFormUI />
        </div>
    </main>
  )
}