import UserAddMeme from "../UserInterface/UserInterface";
import { Container, UsernameForm } from "./LoggedUserElements";
import AdminPanel from "../AdminPanel/AdminPanel";

interface ILoggedUser {
    username: string;
    isAdmin?: boolean;
}

const LoggedUser = ({ username, isAdmin }: ILoggedUser) => {
    return (
        <Container>
            <UsernameForm>Nazwa użytkownika: {username}</UsernameForm>
            <UserAddMeme isAdmin={isAdmin} />
        </Container>
    );
};

export default LoggedUser;
