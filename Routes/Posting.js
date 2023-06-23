import express from 'express';
import { getPosting } from '../Controllers/Posting.js';

const router = express.Router();

router.get('/', getPosting)

export const Posting = router;          