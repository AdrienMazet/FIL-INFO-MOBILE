import { Camera, CameraResultType, GalleryPhoto } from "@capacitor/camera";
import { Storage } from "@capacitor/storage";
import { IonButton, IonModal, IonTextarea } from "@ionic/react";
import { useCallback, useEffect, useState } from "react";
import "./NotesModal.css";

type NotesModalProps = {
  isOpen: boolean;
  sessionTitle: string;
  closeModal: VoidFunction;
};

const NotesModal = ({ isOpen, sessionTitle, closeModal }: NotesModalProps) => {
  const [pictures, setPictures] = useState<GalleryPhoto[]>([]);
  const [note, setNote] = useState<null | string>(null);

  useEffect(() => {
    Storage.get({ key: sessionTitle }).then(({ value }) =>
      setNote(value === null ? "" : value)
    );
    Storage.get({ key: sessionTitle + "-pictures" }).then(({ value }) =>
      setPictures(value === null ? [] : JSON.parse(value))
    );
  }, [sessionTitle]);

  const savePictures = useCallback(async () => {
    await Storage.set({
      key: sessionTitle + "-pictures",
      value: JSON.stringify(pictures),
    });
  }, [sessionTitle, pictures]);

  useEffect(() => {
    savePictures();
  }, [pictures, savePictures]);

  const saveNote = async () => {
    await Storage.set({
      key: sessionTitle,
      value: note || "",
    });
    closeModal();
  };

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    setPictures([...pictures, image as GalleryPhoto]);
  };

  const pickPicture = async () => {
    const images = await Camera.pickImages({
      quality: 90,
    });
    setPictures([...pictures, ...images.photos]);
  };

  return (
    <IonModal isOpen={isOpen}>
      <div className="modal-container">
        <h1 className="modal-session-title">{sessionTitle}</h1>
        <div>
          <IonButton onClick={takePicture}>📷</IonButton>
          <IonButton onClick={pickPicture}>🖼️</IonButton>
        </div>
        <IonButton className="modal-save-button" onClick={saveNote}>
          Enregister
        </IonButton>
        <IonTextarea
          placeholder="Ecrivez vos notes ici..."
          className="modal-note-input"
          value={note}
          disabled={note === null}
          onIonChange={(e) => setNote(e.detail.value!)}
        />
        {pictures.map((picture, index) => (
          <img
            key={index}
            className="modal-image"
            src={picture.webPath}
            alt="Prise par l'utilisateur"
          />
        ))}
      </div>
    </IonModal>
  );
};

export default NotesModal;
