import React, { useState } from 'react';
import { useLocalStorage } from "../../../components/StorageWrapper";
import { IonContent, IonButton, IonInput, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import './index.css'

const DriverQR: React.FC = () => {
  const { db } = useLocalStorage();
  const [stringEncoded, setStringEncoded] = useState('')
  const dataToScan = async () => {
    const data = await BarcodeScanner.scan();
    alert(JSON.stringify(data));
    setStringEncoded(data.text)
  };

  console.log(stringEncoded);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='wrapper'>
          <IonButton color="danger" expand="block" onClick={dataToScan}>
            Scan Ticket
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DriverQR

