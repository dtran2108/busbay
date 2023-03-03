import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


const Temp: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>temp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       <p>temp</p>
       
      </IonContent>
    </IonPage>
  );
};

export default Temp
