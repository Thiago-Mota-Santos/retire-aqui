import { ProviderModel } from '../../modules/provider/providerModel';
import { ProviderInput } from './type';

export async function provider(data: ProviderInput) {
  const newProvider = await ProviderModel.create({
    CPF: data.CPF,
    productName: data.productName,
    address: data.address,
    productSize: data.productSize,
    deliveryDate: data.deliveryDate,
    whereIsPurchased: data.whereIsPurchased,
    status: data.status,
  });

  await newProvider.save();

  return {
    data: {
      _id: newProvider._id.toString(),
      CPF: newProvider.CPF,
      sucess: "provider has been successfully created"
    },
  }
}
