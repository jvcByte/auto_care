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
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './users/tab1/Tab1';
import Tab2 from './users/tab2/Tab2';
import Tab3 from './users/tab3/Tab3';

const Home: React.FC = () => (
  <IonPage>
    <IonContent>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/home/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/home/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/home">
            <Redirect to="/home/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home/tab1">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/home/tab2">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/home/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonContent>
  </IonPage>
);

export default Home;
