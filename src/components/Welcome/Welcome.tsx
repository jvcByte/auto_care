import './Welcome.css';
import Intro1PNG from '../../../assets/images/intro-images/customerAndVehicleMgt.png';
import Intro2PNG from '../../../assets/images/intro-images/requestHomeService.png';
import Intro3PNG from '../../../assets/images/intro-images/requestService.png';
import Intro4PNG from '../../../assets/images/intro-images/selectVehicle.png';
import Intro5PNG from '../../../assets/images/intro-images/vehicleMake.png';
import Intro6PNG from '../../../assets/images/intro-images/trackService.png';
import Intro7PNG from '../../../assets/images/intro-images/monitorProgress.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { IonText } from '@ionic/react';


interface WelcomeProps {
    onFinish: () => void;
}

const Welcome: React.FC<WelcomeProps> = () => {
    return (
        <div className="container">
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img src={Intro1PNG} alt="Intro 1" />
                    <IonText>Customer and Vehicle Management</IonText>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Intro2PNG} alt="Intro 2" />
                    <IonText>Request Home Service</IonText>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Intro3PNG} alt="Intro 3" />
                    <IonText>Request Service</IonText>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Intro4PNG} alt="Intro 4" />
                    <IonText>Select Vehicle</IonText>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Intro5PNG} alt="Intro 5" />
                    <IonText>Vehicle Make</IonText>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Intro6PNG} alt="Intro 6" />
                    <IonText>Track Service</IonText>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Intro7PNG} alt="Intro 7" />
                    <IonText>Monitor Progress</IonText>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Welcome;
