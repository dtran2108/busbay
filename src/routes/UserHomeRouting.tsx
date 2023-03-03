import { IonContent, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { busOutline, ticketOutline, triangle } from 'ionicons/icons';
import React from 'react';


import { Redirect, Route } from 'react-router-dom';
import Temp from "../pages/Temp";
import { useLocalStorage } from '@/components/StorageWrapper';
import Home from '../pages/UserHome';
import UserHomeTicket from '../pages/UserHomeTicket';

const UserHomeRouting: React.FC = () => {
    const router = useIonRouter()
  return (
    <IonPage>
      <IonContent fullscreen></IonContent>
      <IonRouterOutlet>
        <Route exact path="/user-home">
          <Home/>
        </Route>
        <Route exact path="/user-home/ticket">
          <UserHomeTicket />
        </Route>
        <Route exact path="/user-home/route2">
          <Temp />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab='user' selected={router.routeInfo.pathname == '/user-home'} href="/user-home/route">
          <IonIcon aria-hidden="true" icon={busOutline} />
          <IonLabel>Navigate</IonLabel>
        </IonTabButton>
        <IonTabButton tab="user-home/ticket" selected={router.routeInfo.pathname == '/user-home/ticket'} href="/user-home/ticket">
          <IonIcon aria-hidden="true" icon={ticketOutline} />
          <IonLabel>Ticket</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default UserHomeRouting

