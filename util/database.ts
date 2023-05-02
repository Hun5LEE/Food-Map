import { MongoClient, MongoClientOptions } from "mongodb";

const url: string =
  "mongodb+srv://jhlee0916:dlwogns33!@cluster0.iafhfti.mongodb.net/?retryWrites=true&w=majority";
const options: MongoClientOptions = { useNewUrlParser: true } as any;
let connectDB: Promise<MongoClient>;

declare global {
  var _mongo: Promise<MongoClient>;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
