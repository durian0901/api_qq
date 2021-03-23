import models from '../models/index';
import _ from 'lodash'; 
import sequelize from 'sequelize';
import { brotliDecompressSync } from 'zlib';

const {users} =models;

class UserConstroller{
    getUser =async(req, res) =>{
        const {email}=req.query;
        const user = await users.findAll();   //查全部資料  
        const respone =_.map(user, (o) =>({  //用資料
           ... o.dataValues,
           vip:true,
        }));
     
        res.status(200).json({respone})
    };

    postUser = async(req,res) =>{  //先處理簡單的工作
        const {body}=req;
        const{email, password} = body
        const user = await users.create({   //與資料庫做連線
            email,
            password
        });
        res.status(200).json({user});  //promise事件:a做完才會做b=>前面的程式做完後才return
    }
}
export default new UserConstroller();

//2ji 2ji u4g04 多多益善