export interface User {
  email: string;
  name: string;
  id: number;
  cpf: string;
  telephone: string;
  birthDate: string;
  username: string;
  address: [
    {
      city: string;
      uf: string;
    }
  ];
}
