import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const fakeUser = {
    id: 1,
    email: "cperen@inweb.com",
    // password: "$2b$10$TKh8H1.Pz8pZx8qz7l5i5eK7aJ5r3Uczdlz7YT1NxyaB4ezgmO6Ky"
    password: "123456"
}

export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body

    if (email !== fakeUser.email) {
        return res.status(401).json({ message: "Invalid credentials" })
    }

    // const validPassword = await bcrypt.compare(password, fakeUser.password)
    const validPassword = password === fakeUser.password

    if (!validPassword) {
        return res.status(401).json({ message: "Invalid credentials" })
    }

    const token = jwt.sign(
        { userId: fakeUser.id, email: fakeUser.email },
        process.env.JWT_SECRET || "secret",
        { expiresIn: "1h" }
    )

    res.json({ token })
}