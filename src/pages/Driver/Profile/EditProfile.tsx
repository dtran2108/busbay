import React, { useState, useRef } from 'react';
import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonIcon,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import { pencilOutline } from 'ionicons/icons';

function EditProfile() {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);
    function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
    }

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
            
        }
    }

    return (
        <>
            <IonButton fill="clear" id="open-modal" expand="block">
                <IonIcon slot="icon-only" icon={pencilOutline}></IonIcon>
            </IonButton>
            <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                        </IonButtons>
                        <IonTitle>Edit Your Information</IonTitle>
                        <IonButtons slot="end">
                            <IonButton strong={true} onClick={() => confirm()}>
                                Confirm
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonItem>
                        <IonLabel position="stacked">Full Name</IonLabel>
                        <IonInput ref={input} type="text" placeholder="John Doe" />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Email</IonLabel>
                        <IonInput ref={input} type="text" placeholder="john.doe@busbay.com" />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Phone Number</IonLabel>
                        <IonInput ref={input} type="text" placeholder="+84 1234 567 89" />
                    </IonItem>
                </IonContent>
            </IonModal>
        </>
    );
}

export default EditProfile;