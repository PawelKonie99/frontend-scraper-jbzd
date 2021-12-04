// import IUser from "../interfaces/UserInterface";
export {};

interface IUserRedcuer {
    type: string;
    payload: {
        username: string;
        token: string;
    };
}

export const userReducer = (state = "", action: IUserRedcuer) => {
    // console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                user: action,
            };
        case "SET_ADMIN":
            return {
                user: action,
            };
        default:
            return state;
    }
};

export const setUser = (user: string) => {
    return {
        type: "SET_USER",
        payload: {
            user,
        },
    };
};

export const setAdmin = (user: string) => {
    return {
        type: "SET_ADMIN",
        payload: {
            user,
        },
    };
};
