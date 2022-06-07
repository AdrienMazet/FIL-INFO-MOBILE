// chargement de la CSS du Framework Ionic
import "@ionic/core/css/ionic.bundle.css";

import { defineCustomElements } from "@ionic/core/loader";

const init = async () => {
  // chargement de tous les composants
  // la démarche n'est pas optimale car nous importons tous les composants
  await defineCustomElements();

  const response = await fetch(
    "https://devfest-nantes-2018-api.cleverapps.io/blog"
  );
  const data = await response.json();
  const list = document.getElementById("myList");
  data.forEach((blogPost) => {
    const { title, brief, image } = blogPost;
    const card =
      "<ion-card>" +
      "<img " +
      "src=" +
      `https://devfest2018.gdgnantes.com${image} ` +
      "/>" +
      "<ion-card-header>" +
      `<ion-card-title>${title}</ion-card-title>` +
      "</ion-card-header>" +
      `<ion-card-content>${brief}</ion-card-content>` +
      "</ion-card>";
    list.innerHTML += card;
  });
};

init();
