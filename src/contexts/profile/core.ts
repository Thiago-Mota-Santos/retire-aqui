import { ProfileModel } from '../../modules/profile/ProfileModel';
import { ProfileInput } from './types';

export async function profile(data: ProfileInput) {
  const profile = await ProfileModel.findOne({ CPF: data.CPF, type: data.type });
  if (profile) {
    return { error: 'There is already a user with this CPF registered.' };
  }

  const newProfile = await ProfileModel.create({
    CPF: data.CPF,
    type: data.type,
  });

  await newProfile.save();

  return {
    data: {
      _id: newProfile._id.toString(),
      CPF: newProfile.CPF,
      type: newProfile.type,
    },
  }
}
