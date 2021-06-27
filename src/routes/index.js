import { Router } from 'express';
import { agendsRouter } from './agends.routes.js';

const routes = Router();

routes.use('/agends', agendsRouter);

export { routes };