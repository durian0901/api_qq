import {Router} from 'express';
import user from './user'
import UserConstroller from '../controllers/user';

const router =Router();

//GET: /api/user
router.get('/',UserConstroller.getUser);
router.post('/',UserConstroller.postUser)

export default router;