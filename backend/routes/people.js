import { Router } from 'express';
const router = Router();
import { getAllLocations, getAmberLocation, getTitleKid } from '../controllers/peopleController.js';

router.get('/locations', getAllLocations);
router.get('/amber', getAmberLocation);
router.get('/kid', getTitleKid);

export default router;
