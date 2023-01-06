import { ObjectId } from "mongodb";

interface UserData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export default UserData;