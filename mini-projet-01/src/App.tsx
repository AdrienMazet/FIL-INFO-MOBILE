import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { listOutline, homeOutline, phonePortraitOutline } from "ionicons/icons";
import Conference from "./pages/Conference";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/conference">
            <Conference />
          </Route>
          <Route exact path="/sessions">
            <Tab2 />
          </Route>
          <Route path="/telephone">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/conference" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="conference" href="/conference">
            <IonIcon icon={homeOutline} />
            <IonLabel>Conférence</IonLabel>
          </IonTabButton>
          <IonTabButton tab="sessions" href="/sessions">
            <IonIcon icon={listOutline} />
            <IonLabel>Sessions</IonLabel>
          </IonTabButton>
          <IonTabButton tab="telephone" href="/telephone">
            <IonIcon icon={phonePortraitOutline} />
            <IonLabel>Téléphone</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
