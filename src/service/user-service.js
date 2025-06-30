
import { prismaClient } from "../application/database";
import { registerUserValidation } from "../validation/user-validation"
import { validate } from "../validation/validation"

const register = async(request) =>{
    const user = validate(registerUserValidation, request);

    const countUser = await prismaClient.user.count({
        where: {
            username: user.username
        }
    });
    
}