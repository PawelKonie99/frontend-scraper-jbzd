import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "../Button/Button";
import styled from "styled-components";
import { IUser } from "../../interfaces/UserInterface";
import { Itheme } from "../../utils/theme";
import {
  ModalForm,
  InputContainer,
  Label,
  Input,
} from "./ValidatorModalElements";

interface IModal {
  title: string;
  operationType: string;
  handleValidation: (credentials: IUser) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "flex-start",
      marginTop: "10rem",
      justifyContent: "center",
    },
  })
);

const ValidationModal = ({
  title,
  operationType,
  handleValidation,
}: IModal) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValidationMethod = async (event: any) => {
    event.preventDefault();
    handleValidation({ username, password });

    setUsername("");
    setPassword("");
    handleClose();
  };

  return (
    <div>
      <Button text={operationType} onClick={handleOpen}></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalForm onSubmit={handleValidationMethod}>
            <InputContainer>
              <Label>Login</Label>
              <Input
                type={"text"}
                id="login"
                name="login"
                placeholder="Login ..."
                required
                onChange={({ target }) => setUsername(target.value)}
              />
            </InputContainer>
            <InputContainer>
              <Label>Hasło</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Hasło ..."
                required
                onChange={({ target }) => setPassword(target.value)}
              />
            </InputContainer>
            <Button type="submit" text={title}></Button>
          </ModalForm>
        </Fade>
      </Modal>
    </div>
  );
};

export default ValidationModal;
