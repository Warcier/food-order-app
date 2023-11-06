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
        <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
            <label className="block mb-4">
                Email:
                <input
                    type="email"
                    className="block w-full p-2 border-gray-300 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>

            <label className="block mb-4">
                Select Food:
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
            </label>

            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
}
