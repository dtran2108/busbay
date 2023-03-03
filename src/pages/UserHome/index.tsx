import { useLocalStorage } from "../../components/StorageWrapper";
import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonRouterOutlet, IonSpinner, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { busOutline, ellipse, searchOutline, square, triangle } from 'ionicons/icons';
import React, { Suspense, useDeferredValue, useMemo, useState } from 'react';
import './index.css'
import { useQuery } from "@tanstack/react-query";
import BustopListQuery from "../../components/BustopListQuery";


const UserHome: React.FC = () => {

  const [query, setQuery] = useState('');

  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;
  
  const suggestions = useMemo(() =>
    <BustopListQuery
      query={deferredQuery}
    />,
    [deferredQuery]
  );

  return (
    <IonPage>

      <IonContent fullscreen>
        <div style={{ width: "100%", padding:'5%' }} >


          <div style={{ display: "flex", width: "100%", alignItems: "center", gap: 10, flexDirection: "row", }}>

            <div className="bus-icon-button">
              <IonIcon icon={searchOutline} />
            </div>
            <IonInput value={query} onIonChange={(e) => setQuery(e.target?.value as string)} placeholder="search for bus stop" className="user-home-custom-input" />

            
          </div>
          <br />
          <Suspense fallback={<h2>Loading...</h2>}>
            

               {suggestions}
        
            </Suspense>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default UserHome

