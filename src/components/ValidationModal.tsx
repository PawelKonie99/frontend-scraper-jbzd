import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "./Button";
import styled from "styled-components";

const ModalForm = styled.form`
  padding: 2rem 5rem;
  background: ${({ theme }) => theme.colors.offWhite};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.darkerBackground};
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.4rem 2rem;
  border: none;
  border-radius: 3px;
`;

interface IModal {
  title: string;
  operationType: string;
  handleValidation: () => void;
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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <ModalForm>
            <InputContainer>
              <Label>Login</Label>
              <Input
                type={"text"}
                id="login"
                name="login"
                placeholder="Login ..."
                required
              />
            </InputContainer>
            <InputContainer>
              <Label>Hasło</Label>
              <Input
                type="text"
                id="password"
                name="password"
                placeholder="Hasło ..."
                required
              />
            </InputContainer>
            <Button text={title} onClick={handleValidation}></Button>
          </ModalForm>
        </Fade>
      </Modal>
    </div>
  );
};

export default ValidationModal;
