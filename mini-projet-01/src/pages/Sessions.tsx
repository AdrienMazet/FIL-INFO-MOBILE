import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { getSessions } from "../services";
import "./Sessions.css";

const Sessions: React.FC = () => {
  const [sessions, setSessions] = useState<null | Session[]>(null);

  useEffect(() => {
    getSessions().then((data) =>
      setSessions(Object.entries(data).map(([entry]) => data[entry]))
    );
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sessions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {!sessions && (
          <p className="loading-sessions-text">Chargement des sessions...</p>
        )}
        <IonList>
          {sessions?.map((session) => (
            <IonItem className="session-item" key={session.id}>
              <IonLabel>
                <a href={`/sessions/${session.id}`}>{session.title}</a>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Sessions;
