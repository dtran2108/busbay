import { useLocalStorage } from '../../components/StorageWrapper';
import { IonButton, IonContent, IonCheckbox, IonInput, IonImg, IonLabel, IonList, IonLoading, IonPage, IonTitle, IonToolbar, IonItem, useIonRouter } from '@ionic/react';
import './index.css'
import { useState } from 'react';
import bus from "../../img/bus.png";
import { useHistory } from 'react-router';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
import { toURLEncoded } from '../../utils';

const Login: React.FC = () => {
  const { db } = useLocalStorage();
  const {
    handleSubmit,
    control,
    setValue,
    register,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const router = useIonRouter();
  const [showLoading, setShowLoading] = useState(false);

  const onSubmit = (data: any) => {
    setShowLoading(true);
    fetch('http://192.168.1.52:3000/v1/auth/login', {
      method: 'POST',
      body: toURLEncoded(data)
    })
      .then(response => {
        console.log(response)
        router.push('/scan-qr')
        setShowLoading(false);
      })
      .catch(err => {
        console.log(err)
        setShowLoading(false);
      });
  };

  return (
    <IonPage>

      <IonContent fullscreen>
        <div className='scroll' style={{ height: "100%" }}>
          <div className='login-title-wrapper'>
            <div style={{ width: '50%' }}>
              <IonImg src='https://cdn-icons-png.flaticon.com/512/1205/1205947.png' />
            </div>
            <h3 style={{ textAlign: "center" }}>WELCOME BACK!</h3>
            <p style={{ textAlign: "center", opacity: "0.7" }}>Please login to your account</p>
          </div>
          <br />
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <IonItem className='field'>
              <IonInput placeholder='Email' className='login-custom-input' clearInput={true}
                {...register('email', {
                  required: 'This is a required field',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'invalid email address'
                  }
                })}
              />
            </IonItem>
            <ErrorMessage
              errors={errors}
              name="email"
              as={<div style={{ color: 'red' }} />}
            />
            <br />
            <IonItem className='field'>
              <IonInput type="password" placeholder='Password' className='login-custom-input' clearInput={true}
                {...register('password', { required: 'Password is required' })}
              />
            </IonItem>
            <ErrorMessage
              errors={errors}
              name="password"
              as={<div style={{ color: 'red' }} />}
            />
            <br />
            <div className='login-footer'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IonCheckbox style={{ color: "#fff", marginRight: '8px' }}></IonCheckbox>
                <IonLabel>Remember me</IonLabel>
              </div>
              <p>Forgot password?</p>
            </div>
            <IonButton type='submit' expand="block" style={{ width: "100%" }} size='default'>Login</IonButton>
          </form>
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

