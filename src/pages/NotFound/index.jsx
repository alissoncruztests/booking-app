import React from 'react';
import { Link } from 'react-router-dom'

import NotFoundImg from '../../assets/notfound.svg'

import './styles.css'

const NotFound= () => {

    return (
        <>
            <Link to="/">
               <button className="button_back" >Voltar</button>
            </Link>
            <img className="notFoundImg" src={NotFoundImg} alt="image_booking"/>
            <h1>Not Found</h1>
        </>
        
    );
}

export default NotFound;
