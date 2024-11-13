import express, { NextFunction, Request, Response } from 'express';
import usersRouter from './routes/user';
const app = express();

const PORT = 3000;

app.use('/api/users',usersRouter);



app.listen(PORT,()=>{
    console.log(`Running on Port ${PORT}`);
});
