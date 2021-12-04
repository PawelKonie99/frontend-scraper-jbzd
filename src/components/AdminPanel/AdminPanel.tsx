import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import { IUserReducer } from "../../interfaces/UserInterface";
import { RootState } from "../../pages/MainPage";
import getAllUsers from "../../services/getAllUsers";
import { AdminPanelContainer, BackToMain } from "./AdminPanelElements";

const AdminPanel = () => {
    const [allUsers, setAllUsers] = useState<any>();
    const isUserLogged: IUserReducer = useSelector((state: RootState) => state.userReducer);
    const isUser = isUserLogged.user;

    const loadUsers = async () => {
        const allUsersFromDb = await getAllUsers(isUser.payload.user.username);
        if (allUsersFromDb) {
            setAllUsers(allUsersFromDb);
        }
        console.log(allUsers?.allUsers);
    };

    return (
        <Route
            render={({ history }) => (
                <AdminPanelContainer>
                    <button onClick={loadUsers}>Załaduj uytkowników</button>
                    <Link style={{ textDecoration: "none", marginBottom: "3rem" }} to={"/page/1"}>
                        <BackToMain>Powrót do strony głównej</BackToMain>
                    </Link>
                    {allUsers?.allUsers?.map((user: any) => (
                        <div key={user.username}>
                            <div>
                                <p>{user.username}</p>
                                <div>
                                    {user?.memes.map((id: any) => (
                                        <p key={id}>{id}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </AdminPanelContainer>
            )}
        />
    );
};

export default AdminPanel;
