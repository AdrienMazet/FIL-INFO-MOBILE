import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import "./Conference.css";

const Conference: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Conférence</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="conference-container">
          <img
            width="75%"
            src="https://www.serli.com/wp-content/uploads/2019/07/DevFest-Nantes-2018.png"
            alt="Affiche du DevFest 2018"
          />
          <strong>DevFest Nantes</strong>
          <p>18 au 19 octobre 2018</p>
          <IonButton href="/sessions">Voir les sessions</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Conference;
