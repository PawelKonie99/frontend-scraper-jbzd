export interface IUser {
  username: string;
  password: string;
}

export interface IUserReducer {
  user: {
    payload: {
      username: string;
    };
  };
}
