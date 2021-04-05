import Button from "../Button/Button";
import { Itheme } from "../../utils/theme";
import { Link, Route } from "react-router-dom";

const UserInterface = () => {
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

  //todo make better ux and ui
  return (
    <Route
      render={({ history }) => (
        <>
          <Button text={"Dodaj mema"} onClick={() => addMeme(history)} />
          <Button
            text={"Wyloguj się"}
            color={({ theme }: { theme: Itheme }) => theme.colors.logout}
            onClick={handleLogout}
          />
        </>
      )}
    />
  );
};

export default UserInterface;
