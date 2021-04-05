// import IUser from "../interfaces/UserInterface";
export {};

interface IUserRedcuer {
  type: string;
  payload: {
    username: string;
  };
}

export const userReducer = (state = "", action: IUserRedcuer) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        user: action,
      };
    default:
      return state;
  }
};

export const setUser = (username: string) => {
  console.log(username);
  return {
    type: "SET_USER",
    payload: {
      username,
    },
  };
};
