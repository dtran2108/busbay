import React, { useState } from 'react';
import { useLocalStorage } from "../../../components/StorageWrapper";
import { IonContent, IonPage, IonImg, IonAvatar, IonButton, IonIcon } from '@ionic/react';
import { ellipse, pencilOutline, square, triangle } from 'ionicons/icons';
import EditProfile from './EditProfile';
import './index.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="wrapper">
          <IonAvatar>
            <img alt="Silhouette of a person's head" src="https://api.dicebear.com/5.x/personas/svg" />
          </IonAvatar>
          <h2 style={{ marginBottom: 0 }}><strong>John Doe</strong></h2>
          <p style={{ opacity: 0.7 }}>Driver</p>
          <hr></hr>
          <div style={{ textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.1)', width: '80%', paddingTop: '42px' }}>
            <EditProfile />
            <p><strong>Bus 11</strong></p>
            <p>+84 1234 567 89</p>
            <p>john.doe@busbay.com</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile

