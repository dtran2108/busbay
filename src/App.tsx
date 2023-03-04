import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';
import { StorageWrapperProvider } from './components/StorageWrapper';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import UserHomeRouting from './routes/UserHomeRouting';
import DriverHomeRouting from './routes/DriverHomeRouting';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
setupIonicReact();

const App: React.FC = () => {

  return <IonApp>
    <StorageWrapperProvider>
    <QueryClientProvider client={queryClient}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/scan-qr">
            <DriverHomeRouting />
          </Route>
          <Route exact path="/profile">
            <DriverHomeRouting />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
      </QueryClientProvider>
    </StorageWrapperProvider>
  </IonApp>
};

export default App;
