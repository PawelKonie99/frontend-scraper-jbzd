import React, { useEffect, useState } from "react";
import {
  AddMemeContainer,
  InputFile,
  Image,
  AddMemeForm,
  Input,
  MissingValueError,
  Success,
  BackToMain,
} from "./AddMemeElements";
import addMemeService from "../../services/addMeme";
import { IUserReducer } from "../../interfaces/UserInterface";
import { useSelector } from "react-redux";
import { RootState } from "../../pages/MainPage";
import Button from "../Button/Button";
import { Link, Route } from "react-router-dom";

interface IobjectToSend {
  title: string;
  photoUrl: string;
  //   token: string;
}

const AddMemePage = () => {
  const [image, setImage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [missingImageErr, setMissingImageErr] = useState<boolean>(false);
  const [missingTitleErr, setMissingTitleErr] = useState<boolean>(false);
  const [succesAdded, setSuccessAdded] = useState<boolean>(false);
  const [fileTitle, setFileTitle] = useState("");

  const isUserLogged: IUserReducer = useSelector(
    (state: RootState) => state.userReducer
  );
  const user = isUserLogged.user;

  // useEffect
  const handleAddTitle = (event: EventTarget & HTMLInputElement): void => {
    setTitle(event.value);
  };

  const handleAddImage = (event: any): void => {
    setFileTitle(event.target.files[0].name);
    // const file = URL.createObjectURL(event.target.files[0]);
    const file = event.target.files[0];
    setImage(file);
  };

  const handleAddMeme = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData();
    data.append("newMeme", image);
    data.append("title", title);

    if (image && title) {
      //tutaj dodajemy mema do bazy
      const config = {
        headers: { Authorization: `bearer ${user.payload.user.token}` },
      };

      const addMemeResult = addMemeService.addMemeToDb(data, config);

      setImage("");
      setTitle("");
      setSuccessAdded(true);
    } else if (!image && !title) {
      setMissingImageErr(true);
      setMissingTitleErr(true);
    } else if (!image) {
      setMissingImageErr(true);
    } else {
      setMissingTitleErr(true);
    }

    setTimeout(() => {
      setMissingImageErr(false);
      setMissingTitleErr(false);
      setSuccessAdded(false);
    }, 1500);
  };

  //   onChange={({ target }) => setUsername(target.value)}
  return (
    <AddMemeContainer>
      <Link
        style={{ textDecoration: "none", marginBottom: "3rem" }}
        to={"/page/1"}
      >
        <BackToMain>Powrót do strony głównej</BackToMain>
      </Link>
      <AddMemeForm encType="multipart/form-data" onSubmit={handleAddMeme}>
        <Input
          placeholder="Dodaj tytuł"
          type="text"
          value={title || ""}
          onChange={({ target }) => handleAddTitle(target)}
        />
        <Image src={image} alt="" />
        <InputFile
          name="newMeme"
          type="file"
          id="input"
          accept="image/*"
          onChange={(event) => handleAddImage(event)}
        ></InputFile>
        <Button type="submit" text={"Dodaj mema"}></Button>
      </AddMemeForm>
      {missingImageErr ? (
        <MissingValueError>Brakuje obrazka !</MissingValueError>
      ) : (
        ""
      )}
      {missingTitleErr ? (
        <MissingValueError>Brakuje tytułu !</MissingValueError>
      ) : (
        ""
      )}
      {succesAdded ? <Success>Mem został dodany !</Success> : ""}
    </AddMemeContainer>
  );
};

export default AddMemePage;
