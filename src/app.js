import express from 'express';
import http from 'http';
import cookieParse from 'cookie-parse';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import session from 'express-session';
import index from './router/index.js'


const app = express();

reqire('dotenv').config();

app.use(express.json());
app.use(express.urlencode({extended: false}));
app.use(cookieParse());
app.use(express.static(path.resolve(__dirname,'../view')));
app.use(morgan('dev'));
app.use(cors());

app.use(session({
        secret:Process.env.APP_KEY,
        resave: false,
        saveUninitialized: false,
}))

app.use(pasport.initialize())
app.use(passport.session())

app.use('/api',function(req, res, next){
    res.status(200).json({message: 'Hi'})
})

const server = http.createServer(app);

server.listen(3000)

server.on('listening',()=>{
    const addr = server.address();
    console.log(`This server is on ${addr.port}`)
})

