import React from "react";

export default function OrderForm() {

    // Testing purpose
    let test_order = {
        order_id: '1',
        email: 's245663@hsu.edu.hk',
        order: {
            "1": 'Chicken',
            "2": 'Rice',
            "3": 'Soup',
        }
    }


    const handleSubmit = () => async (e: any) => {
        e.preventDefault();

        try {
            await fetch('/api/order/route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(test_order),
            });
            console.log('Sent')
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <button onClick={handleSubmit()}>Order</button>
        </>
    );
}
