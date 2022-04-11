import { MongoHelper } from "../Configs/DbConfig/dbconnect";
import { Request, Response } from "express";
import { getHash } from "../Helpers/crypto";
import IUser from "../Models/user";
import RFC from "../Constants/RFC";

const COLLECTION_NAME = "users";

export const getUsers = async (_req:Request, res:Response) => {
  try {
    const users = await MongoHelper.client.db(process.env.DB_NAME).collection(COLLECTION_NAME).find({}).toArray();
    res.status(RFC.OK).json({
      ok: true,
      message: "Users list",
      data: users,
    });
  } catch (error:any) {
    res.status(RFC.INTERNAL_SERVER_ERROR).json({
      ok: false,
      message: error.message
    });
  }
};

export const saveUser = async (_req:Request, res:Response) => {
  
  try {
    const hash = getHash("admin")
    const newUser:IUser = {
      username: "admin",
      password: hash.value,
      salt: hash.salt,
      role: "admin"
    }

    await MongoHelper.client.db(process.env.DB_NAME).collection(COLLECTION_NAME).insertOne(newUser);
    res.status(RFC.CREATED).json({
      ok: true,
      message: "User saved successfully"
    });
  } catch (error:any) {
    res.status(RFC.INTERNAL_SERVER_ERROR).json({
      ok: false,
      message: error.message
    });
  }
}