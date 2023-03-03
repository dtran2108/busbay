import { IonContent, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { busOutline, ellipse, square, triangle } from 'ionicons/icons';
import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import Temp from "../pages/Temp";
import { useLocalStorage } from '@/components/StorageWrapper';
import Home from '../pages/UserHome';
import DriverQR from '../pages/Driver/DriverQR';
import { qrCodeOutline } from 'ionicons/icons';

const DriverHomeRouting: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen></IonContent>
      <IonRouterOutlet>
        <Route exact path="/driver-scan-qr">
          <DriverQR/>
        </Route>

      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/driver-scan-qr">
          <IonIcon aria-hidden="true" icon={qrCodeOutline} />
          <IonLabel>Scan QR</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/home/route">
          <IonIcon aria-hidden="true" icon={busOutline} />
          <IonLabel>Stations</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default DriverHomeRouting

