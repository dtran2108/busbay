import { useLocalStorage } from "../../components/StorageWrapper";
import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { busOutline, ellipse, square, triangle } from 'ionicons/icons';
import React from 'react';
import Temp from "../Temp";

import { Redirect, Route } from 'react-router-dom';
import './index.css'

const Home: React.FC = () => {
  const { db } = useLocalStorage()
  return (
    <IonPage>

      <IonContent fullscreen>
      <div style={{ width: "100%" }} className='scroll'>
          
         
          <div style={{display:"flex"}}>
         
            <IonInput className='login-custom-input' />
          </div>
          <br/>
         
        </div>
        


      </IonContent>

      
      

    </IonPage>
  );
};

export default Home

