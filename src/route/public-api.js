import express from 'express';
import userController from '../controller/user-controller.js';

const publicApiRouter = new express.Router();
publicApiRouter.post('/api/users', userController.register);

export {
    publicApiRouter
}