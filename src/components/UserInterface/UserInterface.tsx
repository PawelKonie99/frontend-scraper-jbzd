import Button from "../Button/Button";
import { Itheme } from "../../utils/theme";
import { Link, Route } from "react-router-dom";

interface Props {
    isAdmin?: boolean;
}

const UserInterface = ({ isAdmin }: Props) => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    const addMeme = (history: any) => {
        // const pickSingleMeme = (history: any, id: string | undefined) => {
        <Link to={`/interface/addMeme`}></Link>;
        history.push(`/interface/addMeme`);
        // };
    };

    const goToAdminPanel = (history: any) => {
        // const pickSingleMeme = (history: any, id: string | undefined) => {
        <Link to={`/interface/adminPanel`}></Link>;
        history.push(`/interface/adminPanel`);
        // };
    };

    //todo make better ux and ui
    return (
        <Route
            render={({ history }) => (
                <>
                    <Button text={"Dodaj mema"} onClick={() => addMeme(history)} />
                    {isAdmin && <Button text={"PanelAdmina"} onClick={() => goToAdminPanel(history)} />}
                    <Button text={"Wyloguj się"} color={({ theme }: { theme: Itheme }) => theme.colors.logout} onClick={handleLogout} />
                </>
            )}
        />
    );
};

export default UserInterface;
