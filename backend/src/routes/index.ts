import { Router } from 'express';
import quranRoutes from './quran.routes';

const router = Router();

router.use('/quran', quranRoutes);

export default router;