import { Device as DeviceAPI } from "@capacitor/device";
import { Network } from "@capacitor/network";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import "./Device.css";

type DeviceInfo = {
  uuid: string;
  version: string;
  platform: "ios" | "android" | "web";
  model: string;
  networkStatus: string;
};

const Device: React.FC = () => {
  const [deviceInfo, setDeviceInfo] = useState<null | DeviceInfo>(null);

  useEffect(() => {
    Promise.all([
      DeviceAPI.getId(),
      DeviceAPI.getInfo(),
      Network.getStatus(),
    ]).then(([deviceId, deviceMainInfo, networkStatus]) =>
      setDeviceInfo({
        uuid: deviceId.uuid,
        version: deviceMainInfo.osVersion,
        platform: deviceMainInfo.platform,
        model: deviceMainInfo.model,
        networkStatus: networkStatus.connectionType,
      })
    );
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Device</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="device-info-container">
          {deviceInfo ? (
            <>
              <div className="device-info-row">
                Platform : {deviceInfo.platform}
              </div>
              <div className="device-info-row">
                Version : {deviceInfo.version}
              </div>
              <div className="device-info-row">UUID : {deviceInfo.uuid}</div>
              <div className="device-info-row">Model : {deviceInfo.model}</div>
              <div className="device-info-row">
                Connection : {deviceInfo.networkStatus}
              </div>
            </>
          ) : (
            <div>Chargement des données du device...</div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Device;
