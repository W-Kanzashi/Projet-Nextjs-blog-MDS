import { ObjectId } from "mongodb";

interface UserData {
  _id: ObjectId;
  name: string;
  email: string;
  profile: string;
}

export default UserData;
