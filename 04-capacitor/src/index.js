import "@ionic/core/css/ionic.bundle.css";

import { defineCustomElements } from "@ionic/core/loader";
import { defineCustomElements as pwaElements } from "@ionic/pwa-elements/loader";
import { Camera, CameraResultType } from "@capacitor/camera";

const init = async () => {
  pwaElements(window);
  await defineCustomElements();

  const takePictureButton = document.getElementById("take-picture-button");
  takePictureButton.addEventListener("click", takePicture);

  populateList();
};

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
  });
  document.getElementById("picture-modal").setAttribute("is-open", true);
  // afficher modal
  // const imageUrl = image.webPath;
  // imageElement.src = imageUrl;
};

const populateList = async () => {
  const card =
    "<ion-card>" +
    "<img " +
    "src=" +
    `https://devfest2018.gdgnantes.com/images/posts/cfp-tickets.jpg ` +
    "/>" +
    "<ion-card-header>" +
    `<ion-card-title>Titre</ion-card-title>` +
    "</ion-card-header>" +
    `<ion-card-content>Description</ion-card-content>` +
    "</ion-card>";
  const list = document.getElementById("myList");
  list.innerHTML += card;
};

init();
