import { Address } from "./addresses";

export interface UserCore {
  email: string;
  name: string;
  id: number;
  cpf: string;
  telephone: string;
  birthDate: string;
  username: string;
}

export interface User extends UserCore {
  address: Address[];
}
