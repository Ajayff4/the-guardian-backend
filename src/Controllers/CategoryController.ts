import { MongoHelper } from "../Configs/DbConfig/dbconnect";
import { Request, Response } from "express";
import RFC from "../Constants/RFC";

const COLLECTION_NAME = "categories";

export const getCategories = async (_req:Request, res:Response) => {
  try {
    const categories = await MongoHelper.client.db(process.env.DB_NAME).collection(COLLECTION_NAME).find({}).toArray();
    res.status(RFC.OK).json({
      ok: true,
      message: "Categories list",
      data: categories,
    });
  } catch (error:any) {
    res.status(RFC.INTERNAL_SERVER_ERROR).json({
      ok: false,
      message: error.message
    });
  }
};

// add new category
export const saveCategory = async (_req:Request, res:Response) => {
  res.status(RFC.CREATED).json({ 
    ok: true, 
    message: "Category saved successfully"
  });
}

