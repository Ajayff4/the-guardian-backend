import { MongoClient, MongoClientOptions } from "mongodb";

export class MongoHelper {
  public static client: MongoClient;
  constructor() {
    console.log("Inside mongo helper");
  }

  public static async connect(url: string) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    try {
      this.client = await MongoClient.connect(url, options as MongoClientOptions);
      console.log("Connected to mongo db");
    } catch (err:any) {
      console.log("Error while connecting to mongo db", err.message);
    }
  }

  public disconnect(): void {
    MongoHelper.client.close();
  }
}
