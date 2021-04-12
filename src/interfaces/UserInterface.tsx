export interface IUser {
  username: string;
  password: string;
}

export interface IUserReducer {
  user: {
    payload: {
      user: {
        username: string;
        token: string;
      };
    };
  };
}
