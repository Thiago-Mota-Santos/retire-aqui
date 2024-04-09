export type ProviderInput = {
    CPF: string;
    address: string;
    productName: string;
    whereIsPurchased: string;
    deliveryDate: string;
    productSize: 'small' | 'medium' | 'large'; 
    status: 'pending' | 'done';
};
  