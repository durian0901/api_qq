import {Router} from 'express';
import user from './user'
import UserConstroller from '../../controllers/user';

const router =Router();

//GET: /api/user
router.get('/',(req,res)=>{
    
    res.status(200).json({message: 'p li ka p li lala po po li na be be ro do '})
})

export default router;