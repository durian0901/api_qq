import{Router} from 'express';  //結構:)
import user from './user';

import {reddirSync} from ''

// /api/user
// /api/product

const router =Router();   //引入router
router.use('/user',user)

export default router;