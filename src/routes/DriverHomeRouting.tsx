import { IonContent, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import { Route } from 'react-router-dom';
import DriverQR from '../pages/Driver/DriverQR';
import { qrCodeOutline, personOutline } from 'ionicons/icons';
import Profile from '../pages/Driver/Profile';

const DriverHomeRouting: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen></IonContent>
      <IonRouterOutlet>
        <Route exact path="/scan-qr">
          <DriverQR/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>

      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/scan-qr">
          <IonIcon aria-hidden="true" icon={qrCodeOutline} />
          <IonLabel>Scan QR</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/profile">
          <IonIcon aria-hidden="true" icon={personOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default DriverHomeRouting

