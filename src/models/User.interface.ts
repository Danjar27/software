export interface User {
  id?: string;
  uid?: string;
  photo_url?: string;
  name: string;
  lastName: string;
  dni: number | undefined;
  birthDate: Date | string | undefined;
  email: string;
}
