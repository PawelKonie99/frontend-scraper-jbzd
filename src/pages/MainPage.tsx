import React from "react";
import AllMemes from "../components/AllMemes/AllMemes";
import Layout from "../layout/Layout";
import LoginAndRegister from "../components/LoginAndRegister/LoginAndRegister";
import { useSelector } from "react-redux";
import rootReducer from "../reducers/rootReducer";
import { IUserReducer } from "../interfaces/UserInterface";
import LoggedUser from "../components/LoggedUser/LoggedUser";

export type RootState = ReturnType<typeof rootReducer>;
interface IMainPage {
    match?: {
        isExact: boolean;
        params: {
            page: string;
        };
        path: string;
        url: string;
    };
}

const MainPage = ({ match }: IMainPage) => {
    const isUserLogged: IUserReducer = useSelector((state: RootState) => state.userReducer);

    const isUser = isUserLogged.user;

    return (
        <Layout>
            {isUser ? <LoggedUser username={isUser.payload.user.username} isAdmin={isUser.payload.user.isAdmin} /> : <LoginAndRegister />}
            <AllMemes pageRefresh={match ? match?.params.page : 1} />
        </Layout>
    );
};

export default MainPage;
