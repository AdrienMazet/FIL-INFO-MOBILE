import { Storage } from "@capacitor/storage";
import { IonButton, IonModal, IonTextarea } from "@ionic/react";
import { useEffect, useState } from "react";
import "./NotesModal.css";

type NotesModalProps = {
  isOpen: boolean;
  sessionTitle: string;
  closeModal: VoidFunction;
};

const NotesModal = ({ isOpen, sessionTitle, closeModal }: NotesModalProps) => {
  const [note, setNote] = useState<null | string>(null);

  useEffect(() => {
    Storage.get({ key: sessionTitle }).then(({ value }) =>
      setNote(value === null ? "" : value)
    );
  }, [sessionTitle]);

  const saveNote = async () => {
    await Storage.set({
      key: sessionTitle,
      value: note || "",
    });
    closeModal();
  };

  return (
    <IonModal isOpen={isOpen}>
      <div className="modal-container">
        <h1 className="modal-session-title">{sessionTitle}</h1>
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
      </div>
    </IonModal>
  );
};

export default NotesModal;
