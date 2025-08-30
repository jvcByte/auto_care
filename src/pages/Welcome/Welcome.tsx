import './Welcome.css';
import Intro1PNG from '../../../assets/images/intro-images/customerAndVehicleMgt.png';
import Intro2PNG from '../../../assets/images/intro-images/requestHomeService.png';
import Intro3PNG from '../../../assets/images/intro-images/requestService.png';
import Intro4PNG from '../../../assets/images/intro-images/selectVehicle.png';
import Intro5PNG from '../../../assets/images/intro-images/vehicleMake.png';
import Intro6PNG from '../../../assets/images/intro-images/trackService.png';
import Intro7PNG from '../../../assets/images/intro-images/monitorProgress.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { /*IonButton,*/ IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';


interface WelcomeProps {
    onFinish: () => void;
}

const Welcome: React.FC<WelcomeProps> = () => {
    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonTitle></IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding ion-text-center">
                <h4 className="WelcomeHeaderText">Welcome to RoA Auto Care</h4>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500 }}
                >
                    <SwiperSlide>
                        <div className="swiperSlideContent">
                            <img className="swiperImage" src={Intro1PNG} alt="Intro 1" />
                            <IonText>
                                <h5 className="heading5">
                                    Customer and Vehicle Management
                                </h5>
                            </IonText>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiperSlideContent">
                            <img src={Intro2PNG} alt="Intro 2" />
                            <IonText>
                                <h5 className="heading5">
                                    Request Home Service
                                </h5>
                            </IonText>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiperSlideContent" >
                            <img src={Intro3PNG} alt="Intro 3" />
                            <IonText>
                                <h5 className="heading5">
                                    Request Urgent Service
                                </h5>
                            </IonText>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiperSlideContent">
                            <img src={Intro4PNG} alt="Intro 4" />
                            <IonText>
                                <h5 className="heading5">
                                    Select Vehicle
                                </h5>
                            </IonText>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiperSlideContent">
                            <img src={Intro5PNG} alt="Intro 5" />
                            <IonText>
                                <h5 className="heading5">
                                    Vehicle Make
                                </h5>
                            </IonText>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiperSlideContent">
                            <img src={Intro6PNG} alt="Intro 6" />
                            <IonText>
                                <h5 className="heading5">
                                    Track Service
                                </h5>
                            </IonText>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiperSlideContent">
                            <img src={Intro7PNG} alt="Intro 7" />
                            <IonText>
                                <h5 className="heading5">
                                    Monitor Work Progress
                                </h5>
                            </IonText>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* <IonButton expand="block" className="ion-margin-top">
                    Get Started
                </IonButton> */}
            </IonContent>
        </IonPage>
    );
};

export default Welcome;
