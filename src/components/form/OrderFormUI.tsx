"use client"

import { toast } from "@/components/ui/use-toast"
import {useState} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";


export function OrderFormUI() {
    const router = useRouter()
    const {data: session} = useSession();

    const [selectedFood, setSelectedFood] = useState<string[]>([]);

    const foodOptions = [
        { id: "Italian Diavola Pizza", label: "Italian Diavola Pizza", image: "p3.jpg"},
        { id: "Egg Spaghetti Bolognese", label: "Egg Spaghetti Bolognese", image: "p4.jpg"},
        { id: "Beef Fried Rice Noodles", label: "Beef Fried Rice Noodles", image: "p5.jpg" },
        { id: "Curry Chicken Rice", label: "Curry Chicken Rice", image: "p6.jpg" },
        { id: "Teppan Sirloin Rice", label: "Teppan Sirloin Rice", image: "p7.jpg" },
        { id: "Mix Fruit Salad", label: "Mix Fruit Salad", image: "p8.jpg"},
        { id: "Pineapple Pork Chop Burger", label: "Pineapple Pork Chop Burger", image: "p9.jpg"},
        { id: "Corned Beef and Egg Sandwich", label: "Corned Beef and Egg Sandwich", image: "p10.jpg"}
    ];

    const handleFoodCheckboxChange = (foodId: string) => {
        const isSelected = selectedFood.includes(foodId);

        if (isSelected) {
            setSelectedFood(selectedFood.filter((id: string) => id !== foodId));
        } else {
            setSelectedFood([...selectedFood, foodId]);
        }
    };

    function handleSubmit(e: any) {
        try {
            e.preventDefault();

            fetch('/api/createOrder/route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: session?.user?.email ?? "",
                    order: selectedFood,
                }),
            })

            // Toast Status
            toast({
                title: "Order Sent"
            })
            router.push("/")

        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="bg-[url('/images/p11.jpg')] bg-cover bg-center h-[110vh]">

        <header className="bg-white p-2 grid grid-cols-2 items-center mb-2 rounded-lg shadow-md">
            <img src="/images/hsu_logo.png" alt="HSU Logo" className="w-auto h-auto col-span-1" />
            <h1 className="text-2xl font-bold text-green-700 center col-span-1">Ordering Form</h1>
        </header>

        <form className="max-w-md mx-auto mt-8 mb-10 bg-white shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-6">Submit Form</h2>
            <h4 className="text-xl font-bold mb-6">Current Ordering User: {session?.user?.name} </h4>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="food-options">
                    Select Food:
                </label>

                <div className="space-y-2">
                    {foodOptions.map((food) => (
                        <label
                            key={food.id}
                            className="flex items-center"
                        >
                            <input
                                type="checkbox"
                                className="mr-2"
                                value={food.id.toString()}
                                checked={selectedFood.includes(food.id.toString())}
                                onChange={() => handleFoodCheckboxChange(food.id.toString())}
                            />
                        
                            <div className=" pl-4 flex items-center">
                                <img
                                src={`/images/${food.image}`} 
                                alt={food.label}
                                className="w-10 h-10 object-cover rounded-full mr-2"
                            />

                            <span>{food.label}</span>

                            </div>
                        </label>
                    ))}
                </div>
            </div>

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
    );
}
