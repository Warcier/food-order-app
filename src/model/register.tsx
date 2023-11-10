import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    programme: String,
    year: String,
    StudentID: String,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

