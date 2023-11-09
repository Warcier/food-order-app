"use client"

import { toast } from "@/components/ui/use-toast"
import {useState} from "react";

export function OrderFormUI() {

    const [email, setEmail] = useState("");
    const [selectedFood, setSelectedFood] = useState<string[]>([]);

    const foodOptions = [
        { id: "Pizza", label: "Pizza" },
        { id: "Burger", label: "Burger" },
        { id: "Sushi", label: "Sushi" },
        { id: "Pasta", label: "Pasta" },
        { id: "Salad", label: "Salad" },
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
            fetch('/api/order/route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    order: selectedFood,
                }),
            });

            // Toast Status
            toast({
                title: "Order Sent"
            })


        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <form className="max-w-md mx-auto mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-6">Submit Form</h2>
            
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email:
                </label>

                <input
                    type="email"
                    id="email"
                    className="block w-full p-2 border border-gray-300 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

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
                            {food.label}
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
    );
}
