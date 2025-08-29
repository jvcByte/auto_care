import { Route, Redirect } from 'react-router-dom';
import {
  IonContent,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { speedometerOutline, carSportOutline, personOutline } from 'ionicons/icons';
import Dashboard from './users/dashboard/Dashboard';
import Services from './users/services/Services';
import Profile from './users/profile/Profile';

const Home: React.FC = () => (
  <IonPage>
    <IonContent>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/home/services">
            <Services />
          </Route>
          <Route exact path="/home/profile">
            <Profile />
          </Route>
          <Route exact path="/home">
            <Redirect to="/home/dashboard" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home/dashboard">
            <IonIcon aria-hidden="true" icon={speedometerOutline} />
            <IonLabel>Dashboard</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/home/services">
            <IonIcon aria-hidden="true" icon={carSportOutline} />
            <IonLabel>Services</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/home/profile">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonContent>
  </IonPage>
);

export default Home;
