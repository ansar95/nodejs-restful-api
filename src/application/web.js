import express from 'express';
import { publicApiRouter } from '../route/public-api.js';
import { errorMiddleware } from '../middleware/error-middleware.js';

export const web = express();
web.use(express.json());

web.use(publicApiRouter);
web.use(errorMiddleware);