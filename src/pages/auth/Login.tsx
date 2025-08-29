import {
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonInput,
    IonButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonText,
    IonIcon,
    IonInputPasswordToggle,
} from '@ionic/react';
import React from 'react';
import './Login.css';
import { carSport, arrowForwardOutline } from 'ionicons/icons';

const Login: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const DoLogin = (event: any) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonTitle></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" scrollY={false}>
                <IonCard>
                    <IonCardContent>
                        <div className="ion-text-center">
                            <IonIcon
                                icon={carSport}
                                className="ion-margin-bottom button-icon"
                                size="large"
                                color="primary"
                            />
                        </div>
                        <h1 className="ion-text-center">Welcome Back, Login</h1>
                        <form onSubmit={DoLogin} className="ion-padding ion-form">
                            <IonInput
                                label='Email'
                                labelPlacement='floating'
                                fill='outline'
                                placeholder="jvcbyte@example.com"
                                type="email"
                                name="email"
                            />
                            <IonInput
                                label='Password'
                                labelPlacement='floating'
                                fill='outline'
                                placeholder="**********"
                                type="password"
                                name="password"
                            >
                                <IonInputPasswordToggle slot="end" />
                            </IonInput>
                            <IonButton
                                type="submit"
                                expand="block"
                                className="ion-margin-top"
                            >
                                Login
                                <IonIcon icon={arrowForwardOutline} slot="end" />
                            </IonButton>

                            <IonText className="ion-text-center">
                                <p>Don't have an account? <a href="/register" className="ion-text-primary">Register here</a></p>
                            </IonText>
                        </form>
                        
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;   