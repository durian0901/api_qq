import models from '../models/index';
import { brotliDecompressSync } from 'zlib';

const {user} =models;

class UserConstroller{
    getUser =async(req, res) =>{
        const {email}=req.query;
        const user = await users.findAll();
        const users = _.map(user,(o) => {
            return{
                vip:true,
            }
        })
        res.status(200).json({users})
    };

    postUser = async(req,res) =>{  //先處理簡單的工作
        const {body}=req;
        const{email, password} = body
        const user = await users.create({
            email,
            password
        })
        res.status(200).json({user});
    }
}
export default new UserConstroller();

