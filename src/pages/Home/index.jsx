import React,{ useState } from 'react';

import Nav from '../../components/Nav/index'

import ImagnsBooking from '../../assets/imageCalendar.svg'
import Background from '../../assets/bg-2.svg'

import ModalPlaces from  '../../components/Modal/Modal_Places/index'
import ModalContentPlaces from '../../components/Modal/Modal_Places/modal.context'

import './styles.css'

const Home = () => {

    const [ modalOpenPlaces, setModalOpenPlaces] = useState(false)

    return (
        <>
        <img className="background" src={Background} alt="image_background"/>
        <div> 
            < Nav />
        </div>
       
        <p className="text_main">Brasil Bookings </p>
        <h5>Pesquise centenas de lugares de uma só vez e encontre Restaurantes, Hotéis, Bares para você fazer sua reserva na comodidade de sua casa.</h5>
        <button className="button_home" onClick={() => setModalOpenPlaces(true)}>Tipos de Reservas</button>
         <img className="main_image" src={ImagnsBooking} alt="image_booking"/>
       


        <ModalPlaces modalOpen={modalOpenPlaces}>
            <ModalContentPlaces setModalOpen={ setModalOpenPlaces } />  
        </ModalPlaces> 
        </>
        
    );
}

export default Home;
