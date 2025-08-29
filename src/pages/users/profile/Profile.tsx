import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../../components/ExploreContainer/ExploreContainer';
import './Profile.css';
import { ellipsisHorizontalOutline, ellipsisVerticalOutline } from 'ionicons/icons';

const Profile: React.FC = () => {
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
              <IonIcon slot='icon-only' ios={ellipsisHorizontalOutline} md={ellipsisVerticalOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Profile page" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
