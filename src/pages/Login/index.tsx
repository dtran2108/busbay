import { useLocalStorage } from '../../components/StorageWrapper';
import { IonButton, IonContent, IonCheckbox, IonInput, IonImg, IonLabel, IonList, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './index.css'
import { useState } from 'react';
import bus from "../../img/bus.png";

const Login: React.FC = () => {
  const { db } = useLocalStorage()
  const [showLoading, setShowLoading] = useState(false);

  return (
    <IonPage>

      <IonContent fullscreen>
        <div className='scroll' style={{ height: "100%" }}>
          <div className='login-title-wrapper'>
            <IonImg src={bus} alt="bus"></IonImg>
            <h3 style={{ textAlign: "center" }}>WELCOME BACK!</h3>
            <p style={{ textAlign: "center", opacity: "0.7" }}>Please login to your account</p>
          </div>
          <br />
          <div className='field'>
            <IonLabel> Username </IonLabel>
            <IonInput className='login-custom-input' clearInput={true} />
          </div>
          <br/>
          <div className='field'>
            <IonLabel>Password </IonLabel>
            <IonInput type='password' className='login-custom-input' clearInput={true} />
          </div>
          <br/>
          <div className='login-footer'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IonCheckbox style={{ color: "#fff", marginRight: '8px' }}></IonCheckbox>
              <IonLabel>Remember me</IonLabel>
            </div>
            <p>Forgot password?</p>
          </div>
          <IonButton onClick={() => {}} expand="block" style={{width:"100%"}} size='default'>Login</IonButton>
        </div>

        <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
  
      />

      </IonContent>
    </IonPage>
  );
};

export default Login

