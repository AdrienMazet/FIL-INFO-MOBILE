import { Camera, CameraResultType } from "@capacitor/camera";
import { Storage } from "@capacitor/storage";
import "@ionic/core/css/ionic.bundle.css";
import { defineCustomElements } from "@ionic/core/loader";
import { defineCustomElements as pwaElements } from "@ionic/pwa-elements/loader";

let currentPictureUrl = null;

const init = async () => {
  pwaElements(window);
  await defineCustomElements();

  const takePictureButton = document.getElementById("take-picture-button");
  takePictureButton.addEventListener("click", takePicture);

  const closeModalButton = document.getElementById("close-modal-button");
  closeModalButton.addEventListener("click", closeModal);

  const newPictureForm = document.getElementById("new-picture-form");
  newPictureForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = document.getElementById("title-input").value;
    const description = document.getElementById("description-input").value;
    await Storage.set({
      key: new Date().getTime().toString(),
      value: JSON.stringify({ title, description, url: currentPictureUrl }),
    });
    populateList();
    closeModal();
  });

  populateList();
};

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
  });
  currentPictureUrl = image.webPath;
  openModal();
};

const openModal = () =>
  document.getElementById("picture-modal").setAttribute("is-open", true);

const closeModal = () => {
  currentPictureUrl = null;
  document.getElementById("picture-modal").setAttribute("is-open", false);
};

const populateList = async () => {
  const list = document.getElementById("myList");
  list.innerHTML = "";

  const { keys } = await Storage.keys();
  const pictures = (
    await Promise.all(keys.map((key) => Storage.get({ key })))
  ).map((storageResult) => JSON.parse(storageResult.value));

  if (pictures.length === 0) {
    list.innerHTML = "Nothing to display yet, try taking a picture";
  }

  pictures.forEach((picture) => {
    const card =
      "<ion-card>" +
      "<img " +
      "src=" +
      `${picture.url} ` +
      "/>" +
      "<ion-card-header>" +
      `<ion-card-title>${picture.title}</ion-card-title>` +
      "</ion-card-header>" +
      `<ion-card-content>${picture.description}</ion-card-content>` +
      "</ion-card>";
    list.innerHTML += card;
  });
};

init();
