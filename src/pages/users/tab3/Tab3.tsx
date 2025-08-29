import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../../components/ExploreContainer/ExploreContainer';
import './Tab3.css';
import { cameraOutline, ellipsisHorizontalOutline, ellipsisVerticalOutline } from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonHeader translucent={true} className='ion-no-border'>
        <IonToolbar>
          <IonButtons slot='secondary'>
            <IonButton>
              <IonIcon icon={cameraOutline} />
            </IonButton>
            <IonButton>
              <IonIcon slot='icon-only' ios={ellipsisHorizontalOutline} md={ellipsisVerticalOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Profile page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
