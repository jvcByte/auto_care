// import { Link } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  setupIonicReact
} from '@ionic/react';

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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { Link, Route, Switch } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
      
    <IonReactRouter>
      <IonContent>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/">
            <div style={{ padding: '20px' }}>
              <h1>Welcome to RoA Auto Care</h1>
              <p>Click the link below to go to the home page:</p>
              <Link to="/home">Go to Home</Link>
            </div>
          </Route>
        </Switch>
      </IonContent>
    </IonReactRouter>
  </IonApp>
);

export default App;
