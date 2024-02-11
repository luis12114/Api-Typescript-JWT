import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcryptjs.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "Already user";
  const passwordHash = await encrypt(password);
  const registerUser = await UserModel.create({
    email,
    password: passwordHash,
    name,
  });
  return registerUser;
};

const login = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "invalidate User";

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "password incorrect";
  
  const token= await generateToken(checkIs.email)
  const data={
    token,
    user:checkIs
  }
  return data;
  
};

export { registerNewUser, login };
