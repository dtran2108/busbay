import React, { useState } from 'react';
import { useLocalStorage } from "../../../components/StorageWrapper";
import { IonContent, IonButton, IonInput, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';

const DriverQR: React.FC = () => {
  // const { db } = useLocalStorage();
  // const [stringEncoded, setStringEncoded] = useState('')
  // const dataToScan = async () => {
  //   const data = await BarcodeScanner.scan();
  //   alert(JSON.stringify(data));
  //   setStringEncoded(data.text)
  // };

  // console.log(stringEncoded);

  return (
    <IonPage>
      <IonContent fullscreen>
        <strong>Scan Content</strong>
        {/* <IonButton color="danger" expand="block" onClick={dataToScan}>
          Scan Data
        </IonButton> */}
      </IonContent>
    </IonPage>
  );
};

export default DriverQR

