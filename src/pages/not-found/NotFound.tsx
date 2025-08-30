import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, IonImg, useIonRouter } from '@ionic/react';
import { arrowBackOutline, homeOutline } from 'ionicons/icons';
import './NotFound.css';

const NotFound: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage className="not-found-page">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding ion-text-center">
        <div className="not-found-container">
          <IonImg 
            src="../../assets/404.png" 
            alt="404 Error" 
            className="not-found-image"
          />
          
          <h1 className="ion-text-uppercase">Page Not Found</h1>
          <p className="ion-margin-vertical">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="action-buttons">
            <IonButton 
              onClick={() => router.goBack()} 
              fill="outline"
              className="ion-margin-end"
            >
              <IonIcon slot="start" icon={arrowBackOutline} />
              Go Back
            </IonButton>
            
            <IonButton 
              routerLink="/" 
              routerDirection="root"
            >
              <IonIcon slot="start" icon={homeOutline} />
              Home Page
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NotFound;