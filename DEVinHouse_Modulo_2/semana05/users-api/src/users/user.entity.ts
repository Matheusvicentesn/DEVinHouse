export class User {
  id: number;
  login: string;
  email: string;
  senha: string;
  fullName: string;
  createdDate: Date;
  adress: Address;
}

export class Address {
  rua: string;
  numero: string;
}
