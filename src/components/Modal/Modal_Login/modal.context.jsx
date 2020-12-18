import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import { message } from 'antd'

import axios from 'axios'
import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc"


import './styles.css'


const ModalSignUp = ({setModalOpen}) => {
        
    const [ email, setEmail] = useState('')
    const [ password, setPassword ] = useState('')
  
    const handleLogin = async (e) => {
        e.preventDefault()

        const data = {email, password }
        const key = 'updatable';

            if(email !== '' && password !== ''){
                try {
                    const response = await axios.post('https://bookings-madein-pi.herokuapp.com/booking/v1/login', data)
                    console.log(response.data)
                    console.log(response.statusText)
                    if(response.status === 200){

                        message.info({ content: 'Usuário logado, tente com outro email.', key, duration: 2 })
                    }
                    else{
                        message.loading({ content: 'Loading...', key });
                        setTimeout(() => {
                            message.success({ content: 'Usuário cadastrado com sucesso.', key, duration: 3 });
                        }, 1000);

                     }   

                }catch{
                    message.warning({ content:'Erro, por favor tente novamente...', duration: 3 });
                }

            }else {
                message.info({ content: 'Preencha todos os campos.', key, duration: 3.5 });
            }   
        
    }
    return (
    <motion.div
        initial={{opacity:0 ,y: 0.1}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y:'50%'}}
    >
        

    <div className="container_modal_signup">
        <button className="button_close_signup" onClick={ ()=> setModalOpen(false)}>< FiX style={{width: 40, height: 20,fontWeight: 800}}/></button>
        <form onSubmit={handleLogin}>
            <div>
                <h1>Entrar</h1>
                <h4>Informe email e senha</h4>
                
                <input className="signup_email" type="text" placeholder="email" 
                value={email}
                onChange={ e => setEmail(e.target.value)} 
                />
                <input className="signup_password"type="text" placeholder="senha" 
                value={password}
                onChange={ e => setPassword(e.target.value)} 
                />

                <button className="signup_button_entrar"  type="submit">Entrar</button>

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
            </div>
        </form>
   </div>
    </motion.div>
)}

export default ModalSignUp;