import { getCounter } from "../../../test/counters";
import { User, UserModel } from "../UserModel";

export const createUser = async (args: User) => {
  const n = getCounter("user");
  const {
    name = `User ${n}`,
    email = `user${n}@test.com`,
    password = `password123${n}321`,
    ...payload
  } = args;

  const newUser = await new UserModel({
    name,
    email,
    password,
    ...payload,
  }).save();

  console.log(`User created: ${newUser}`);
  
  return newUser;
};