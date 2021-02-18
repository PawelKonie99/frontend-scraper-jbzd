import IUser from "../interfaces/UserInterface";
export {};

interface IUserRedcuer extends IUser {
  type: string;
}

export const userReducer = (state = "", action: IUserRedcuer) => {
  switch (action.type) {
    case "SET_USER":
      return {
        user: action,
      };
    default:
      return state;
  }
};

export const setUser = (username: string, password: string) => {
  return {
    type: "SET_USER",
    payload: {
      username,
      password,
    },
  };
};
