import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NotesModal from "../components/NotesModal";
import { getSessions, getSpeakers } from "../services";
import "./SessionDetails.css";

const SessionDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [session, setSession] = useState<null | Session>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    getSessions().then((sessions) => {
      const session = sessions[id] as Session;
      getSpeakers().then((speakers) => {
        const speakersWithFullData = session.speakers.map(
          (speakerId) => speakers[speakerId]
        );
        setSession({ ...session, speakers: speakersWithFullData });
      });
    });
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Détails de la session</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {session ? (
          <div className="session-details-container">
            <h1 className="session-details-title">{session.title}</h1>
            {(
              session.speakers as never as {
                id: string;
                photoUrl: string;
                name: string;
              }[]
            ).map((speaker, index) => (
              <div className="session-details-speaker-card" key={index}>
                <img
                  src={`https://devfest2018.gdgnantes.com/${speaker.photoUrl}`}
                  alt="Vignette du speaker"
                  width={50}
                />
                <p>{speaker.name}</p>
              </div>
            ))}
            <IonText className="session-details-description">
              {session.description}
            </IonText>
            <IonButton
              className="session-details-notes-button"
              onClick={openModal}
            >
              Mes notes
            </IonButton>
            <NotesModal
              isOpen={isModalOpen}
              sessionTitle={session.title}
              closeModal={closeModal}
            />
          </div>
        ) : (
          <p className="loading-session-text">Chargement des sessions...</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default SessionDetails;
