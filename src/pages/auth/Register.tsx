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
    IonItem,
    IonIcon,
    IonInputPasswordToggle,
} from '@ionic/react';
import React from 'react';
import './Login.css';
import { carSport, personAddOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const DoRegister = (event: any) => {
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
                        <h1 className="ion-text-center">Welcome to Auto Care, Register</h1>
                        <form onSubmit={DoRegister} className="ion-padding ion-form">
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
                                Register
                                <IonIcon icon={personAddOutline} slot="end" />
                            </IonButton>

                            <IonText className="ion-text-center">
                                <p>Already have an account? <Link to="/login" className="ion-text-primary">Login here</Link></p>
                            </IonText>
                        </form>
                        <IonItem lines="none" className="ion-margin-top ion-text-center">
                            <small>By continuing, you agree to our Terms of Service and Privacy Policy</small>
                        </IonItem>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Register;   