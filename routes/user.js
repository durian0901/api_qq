import {Router} from 'express';
import UserConstroller from '../controllers/user'

const router =Router();

//GET: /api/user
router.get('/',(req,res)=>{
    
    res.status(200).json({message: 'This is usr page '})
})

export default router;