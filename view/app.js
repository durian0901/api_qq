import express from 'express';
import http from 'http';
import cookieParse from 'cookie-parse';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import session from 'express-session';
import index from './router/index.js';  //引入資料


const app = express();

reqire('dotenv').config();  //引入dotenv套件    官方要求寫法

//接收json格式
app.use(express.json());  
app.use(express.urlencode({extends: false}));  //避免網址有特殊字元
app.use(cookieParse());                       //引入cookieParse 套件
app.use(express.static(path.resolve(__dirname,'../view')));  //找到目前的檔案  嗎? 好像吧  ㄎㄎ
app.use(morgan('dev'));   //引入morgan
app.use(cors());          //引入cors

//建立session機制
//官方就是這樣寫的    :)
app.use(session({
        secret:Process.env.APP_KEY,    //設定相關資料
        resave: false,
        saveUninitialized: false,
}))


app.use(passport.initialize())  //passport初始化
app.use(passport.session())  //改成Session 機制


app.use('/api',function(req, res, next){   //no no
    res.status(200).json({message: 'Hi'})
})


//create server
const server = http.createServer(app);  //將引入的套件放在Server上  所以要放app

server.listen(3000)  //沒有聽到qq

server.on('listening',()=>{         //把他on起來?????
    const addr = server.address();          //使用address 裡面的port功能
    console.log(`This server is on ${addr.port}`)  //console 顯示啟用的port號   用到`小瓢蟲`
})

