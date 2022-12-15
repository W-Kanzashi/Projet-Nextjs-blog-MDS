import { ObjectId } from "mongodb";

interface UserData {
  _id: ObjectId;
  name: string;
  email: string;
  list: string;
}

export default UserData;
