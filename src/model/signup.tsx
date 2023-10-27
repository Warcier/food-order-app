import type { NextApiRequest, NextApiResponse } from 'next'
import {Schema, model, connect } from "mongoose";
import {number} from "prop-types";


interface IUser {
    name?: string;
    email?: string;
    password?: string;
    programme?: string;
    yearStudy?: number;
    StudentID?: string;
}

// Testing purpose
let testobj = {
    name:'Lowe Jesssica',
    email: 's245663@hsu.edu.hk',
    password: '123456789',
    programme: 'Computer Science',
    yearStudy: 3,
    StudentID: 's245663',
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    programme: { type: String, required: false },
    yearStudy: { type: number, required: false },
    StudentID: { type: String, required: false },
});

const User = model<IUser>('User', userSchema);

async function run() {
    // 4. Connect to MongoDB
    await connect('mongodb://127.0.0.1:27017/test');

    const user = new User(testobj);
    await user.save();

    console.log(user.email); // 'bill@initech.com'
}
run().catch(err => console.log(err));

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IUser>
) {
    req.body
    res.status(200).json({ })
}