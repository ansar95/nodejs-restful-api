import { prismaClient } from "../src/application/database.js"
import bycrypt from "bcrypt"

export const removeTestUtils = async () => {
     await prismaClient.user.deleteMany({
                where: {
                    username: 'testuser'
                }
            })
}


export const createTestUtils = async () => {
     await prismaClient.user.create({
               data: {
                    username: 'testuser',
                    password: await bycrypt.hash('testpassword',10),
                    name: 'Test User',
                    token: 'testtoken'
                }
            })
}        

