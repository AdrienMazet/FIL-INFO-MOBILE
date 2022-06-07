// chargement de la CSS du Framework Ionic
import "@ionic/core/css/ionic.bundle.css";

import { defineCustomElements } from "@ionic/core/loader";

const init = async () => {
  // chargement de tous les composants
  // la démarche n'est pas optimale car nous importons tous les composants
  await defineCustomElements();

  // TODO
};

init();
