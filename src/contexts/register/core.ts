import bcrypt from 'bcrypt';
import { PublicUser, UserModel } from '../../modules/user/UserModel';
import { Result } from '../../modules/user/result';
import { RegisterInput } from './types';

export async function register(data: RegisterInput): Promise<Result<PublicUser>> {
  const user = await UserModel.findOne({ email: data.email });
  
  if (user) {
    return { error: 'E-mail alrady in use' }
  }
  
  const hash = bcrypt.hashSync(data.password, 8);
   
  const newUser = await UserModel.create({
    name: data.name,
    email: data.email,
    password: hash,
  });

  await newUser.save();

  return {
    data: {
      _id: newUser._id.toString(),
      name: newUser.name,
      email: newUser.email,
    },
  }
}