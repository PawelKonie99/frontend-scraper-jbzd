import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import { IUserReducer } from "../../interfaces/UserInterface";
import { RootState } from "../../pages/MainPage";
import getAllUsers from "../../services/getAllUsers";
import {
    AdminPanelContainer,
    BackToMain,
    DeleteMemeButton,
    IdContainer,
    UserContainer,
    UserInfo,
    UserInfoContainer,
    UserName,
    UsersContainer,
    UserTableName,
} from "./AdminPanelElements";
import addMemeService from "../../services/deleteMeme";

const AdminPanel = () => {
    const [allUsers, setAllUsers] = useState<any>();
    const isUserLogged: IUserReducer = useSelector((state: RootState) => state.userReducer);
    const isUser = isUserLogged.user;

    const user = isUserLogged.user;

    const loadUsers = async () => {
        const allUsersFromDb = await getAllUsers(isUser.payload.user.username);
        if (allUsersFromDb) {
            setAllUsers(allUsersFromDb);
        }
    };

    const pickSingleMeme = (history: any, id: string | undefined) => {
        <Link to={`/${id}`}></Link>;
        history.push(`/${id}`);
    };

    const deleteMemeHandler = (id: string, username: string) => {
        const config = {
            headers: { Authorization: `bearer ${user.payload.user.token}` },
        };

        addMemeService.deleteMemeFromDb({ id, username }, config);
        window.location.reload();
    };

    return (
        <Route
            render={({ history }) => (
                <AdminPanelContainer>
                    <button onClick={loadUsers}>Załaduj uzytkowników</button>
                    <Link style={{ textDecoration: "none", marginBottom: "3rem" }} to={"/page/1"}>
                        <BackToMain>Powrót do strony głównej</BackToMain>
                    </Link>
                    <UsersContainer>
                        {allUsers && (
                            <UserInfo>
                                <UserTableName>Nazwa uzytkownika</UserTableName>
                                <p>Memy</p>
                            </UserInfo>
                        )}

                        {allUsers?.allUsers?.map((user: any) => (
                            <UserContainer key={user.username}>
                                <UserName>{user.username}</UserName>
                                {user?.memes.map((id: any) => (
                                    <UserInfoContainer key={id}>
                                        <IdContainer onClick={() => pickSingleMeme(history, id)}>{id}</IdContainer>
                                        <DeleteMemeButton onClick={() => deleteMemeHandler(id, user.username)}>Usun mema</DeleteMemeButton>
                                    </UserInfoContainer>
                                ))}
                            </UserContainer>
                        ))}
                    </UsersContainer>
                </AdminPanelContainer>
            )}
        />
    );
};

export default AdminPanel;
