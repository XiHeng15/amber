import { Router } from 'express';
const router = Router();

import peopleRoutes from './people.js';

router.use('/people', peopleRoutes);

export default router;
