import express from 'express';
import imageProcessor from '../controllers/imageProcessor';

const router = express.Router();

router.get('/images', imageProcessor, (req, res): void => {
  imageProcessor;
});

export default router;
