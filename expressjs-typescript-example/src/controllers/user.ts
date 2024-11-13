import { Request, Response } from "express";
import { CreateUser } from "../dtos/CreateUser.dto";

export function getUsers(request:Request,response:Response){
    response.send([]);
}

export function getUserById(request:Request,response:Response){
    response.send({});
}

export function createUser(request:Request<{},{},CreateUser>,response:Response){
    request.body;
}
