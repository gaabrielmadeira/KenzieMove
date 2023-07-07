export interface IuserProviderProps{
  children: React.ReactNode;
}

// export interface IAutoLoginUser {
//   email: string;
//   name: string;
//   age: number;
//   id: number;
// }

export interface IuserElements{
  email: string;
  name: string;
  confirm: string;
  id: number;
}

export interface Iuser{
  accessToken: string;
  user: IuserElements;
}

export interface Iregister{
  name: string;
  email: string;
  password: string;
}