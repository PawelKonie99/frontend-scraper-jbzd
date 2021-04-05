import Button from "../Button/Button";
import { Itheme } from "../../utils/theme";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/userReducer";

const UserInterface = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    // dispatch(setUser(""));
  };

  return (
    <div>
      <Button text={"Dodaj mema"} />
      <Button
        text={"Wyloguj się"}
        color={({ theme }: { theme: Itheme }) => theme.colors.logout}
        onClick={handleLogout}
      />
    </div>
  );
};

export default UserInterface;
