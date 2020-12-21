import React, {useState} from 'react';
import { Link} from 'react-router-dom'
import { message } from 'antd'

import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc"

import axios from 'axios'
import { login } from "../../../services/auth";


import './styles.css'


const ModalSignUp = ({setModalOpen}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        const data = { username, password }
        console.log(data)
        const requestInfo = {
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }
        const key = 'updatable';

        if(!username || !password) {
            message.info({ content: 'Preencha todos os campos.', key, duration: 3.5 });
        }
        else {
            try {
                const response = await axios.post('https://bookings-madein-pi.herokuapp.com/booking/v1/login', requestInfo )
                .then(response => {
                    if(response.ok) {
                        return response.json()
                    }
                })
                .then(token => console.log(token))

                login(response.data.token)
                

            } catch (err) {
                message.warning({ content:"Houve um problema com o login, verifique suas credenciais. T.T"
                , duration: 3 });
            }
        }
    }
    return(
    <motion.div
        initial={{opacity:0 ,y: 0.1}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y:'50%'}}
    >

    <div className="container_modal_signup">
        <button className="button_close_signup" onClick={ ()=> setModalOpen(false)}>< FiX style={{width: 40, height: 20,fontWeight: 800}}/></button>
        <div>
            <form onSubmit={handleLogin}>

                <h1>Entrar</h1>
                <h4>Informe email e senha</h4>

                <input 
                className="signup_email" 
                type="text" 
                placeholder="email" 
                value={username}
                onChange={ e => setUsername(e.target.value)} 
                />
                <input 
                className="signup_password"
                type="password" 
                placeholder="senha" 
                value={password}
                onChange={ e => setPassword(e.target.value)} />

                <button className="signup_button_entrar">Entrar</button>

                <p className="cadastre-se">Ainda não tem uma conta? 
                  <Link to='/'>
                    Cadastre - se
                  </Link></p>
                <p>ou</p>

                <button className="signup_button_facebook"> Continuar com Facebook</button>
                <div className="icon_facebook">
                    <FaFacebook />
                </div>
                <button className="signup_button_google">Continuar com Google</button>
                <div className="icon_google">
                    <FcGoogle />
                </div>
            </form>
        </div>
        </div>
    </motion.div>
    )
}

export default ModalSignUp;