import { useState } from "react";
import styled from "styled-components";
import LoginModal from "../ValidatorModal/ValidationModal";
import validationService from "../../services/userValidation";
import { IUser } from "../../interfaces/UserInterface";
import { Logger } from "../Logger/Logger";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/userReducer";
import { Itheme } from "../../utils/theme";
import {
  Container,
  ButtonsWrapper,
  ButtonAndInfo,
} from "./LoginAndRegisterElements";

const LoginAndRegister = () => {
  const [registeredUser, setRegisteredUser] = useState<boolean>(false);
  const [registeredUserFailed, setRegisteredUserFailed] = useState<boolean>(
    false
  );
  const [loginUserFailed, setLoginUserFailed] = useState<boolean>(false);
  const [isLoginCorrect, setIsLoginCorrect] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleLogin = async (credentials: IUser) => {
    try {
      const loggedUser = await validationService.login(credentials);
      loggedUser?.username ? setIsLoginCorrect(true) : setLoginUserFailed(true);

      setTimeout(() => {
        setLoginUserFailed(false);
        setIsLoginCorrect(false);
      }, 1500);

      setTimeout(() => {
        dispatch(setUser(loggedUser.username));
      }, 1500);
    } catch (e) {
      console.log("Error while login");
    }
  };

  const handleRegister = async (credentials: IUser) => {
    const registeredUser = await validationService.register(credentials);

    registeredUser?.username
      ? setRegisteredUser(true)
      : setRegisteredUserFailed(true);

    setTimeout(() => {
      setRegisteredUser(false);
      setRegisteredUserFailed(false);
    }, 5000);
  };

  return (
    <Container>
      <ButtonAndInfo>
        <ButtonsWrapper>
          <LoginModal
            title={"Zaloguj się"}
            operationType={"Logowanie"}
            handleValidation={handleLogin}
          />
          <LoginModal
            title={"Zarejestruj się"}
            operationType={"Rejestracja"}
            handleValidation={handleRegister}
          />
        </ButtonsWrapper>
        {registeredUser ? (
          <Logger text="Zarejestrowano, zaloguj się" color="green" />
        ) : null}
        {registeredUserFailed ? (
          <Logger text="Błąd podczas rejestracji" color="red" />
        ) : null}
        {isLoginCorrect ? (
          <Logger text="Użytkownik zalogowany pomyślnie" color="green" />
        ) : null}
        {loginUserFailed ? (
          <Logger text="Zły login lub hasło" color="red" />
        ) : null}
      </ButtonAndInfo>
    </Container>
  );
};

export default LoginAndRegister;
