import React,{useState} from 'react'
import styled from 'styled-components';
import {  createGlobalStyle  } from 'styled-components';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import uuid from 'react-uuid'
import { ProFileUpload } from '../../selectors/ProfileUpload'
import Swal from 'sweetalert2'
import '../../styles/Styles.css'

import logologin from '../img/logologin.svg'
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #16161A;
    
  }
`
const LoginFlex =styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFFFFE;

 
`;
const LoginForm= styled.form`
    padding-top: 8vw;
    padding-right: 4vw;
    padding-left: 4vw;
`;
const LoginImg= styled.input`
 height: 34px;
    padding: 6px 12px;
    border-radius: 17px;
    background-color:#9875F3;
    color: white;
    width: 170px;
    text-align: center;
    line-height: 22px;
    cursor: pointer;
    
`;
const LoginButton=styled.button`
background: #EF4565;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 6px 18px;

position: static;
border-radius: 4px;
margin-top: 1vh;
text-decoration: none;
color: #FFFFFE;
&:hover{
    background: #c2324c;
}

@media only screen and (max-width: 767px){
    width:40%
}
`;

const ButtonLoginH1=styled.h1`

    margin-top: 5vh;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
      
    
    `;
const LoginLabelPImg= styled.label`
 height: 34px;
    padding: 6px 12px;
    border-radius: 17px;
    background-color:#9875F3;
    color: white;
    width: 170px;
    text-align: center;
    line-height: 22px;
    cursor: pointer;
    
`; 
const HrLogin=styled.hr`
border: 1px solid #94A1B2;
margin-top: 2vh;`;


const LoginLabel=styled.label`
color: #FFFFFE;
padding-left: 4vw;
padding-right: 4vw;`;

const LoginLabelP=styled.p`
align-self: flex-start;
    text-indent: 4vw;`;
const LoginEmail=styled.input` 
padding: 12px 16px;
border-radius: 4px;
position: static;

font-size: 16px;
line-height: 24px;
@media only screen and (max-width: 767px){
    width:90%
}`;
const LoginRegistrar=styled.a`
color: #2CB67D;
display: inline;
box-shadow: none;    
text-decoration: none;`
    ;

const LoginH1G=styled.h2`
font-size: 16px;
text-align:center;
margin-left:6px;
`;
const url='https://jsonplaceholder.typicode.com/users';

const AddUser = ({ users }) => {

    const history = useHistory()
    let proFileUrl = []
    const [user, setUser] = useState({
        id: "",
       "name": "",
    "username": "",
    "email": "",
    "address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": "",
      "geo": {
        "lat": "",
        "lng": ""
      }
    },
    "phone": "",
    "website": "",
    "company": {
      "name": "",
      "catchPhrase": "",
      "bs": ""
    }
    })

    const { id, name,username, address:{street,suite,city,zipcode,geo:{lat,lng}},phone,website,company:{cname,catchPhrase,bs}} = user
    

    const handleInputChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

   


    const AddUser = async () => {


        try {
            const resultado = await axios.post(`https://jsonplaceholder.typicode.com/users`, {
                id:uuid,
              
                 name:name,
                 username:username,
                 email:email, 
                address:{street:street,suite:suite,city:city,zipcode:zipcode,geo:{lat:lat,lng:lng}},
                phone:phone,website:website,company:{name:cname,catchPhrase:catchPhrase,bs:bs
                
            }});

            if (resultado.status === 201) {
                Swal.fire(
                    'Usuario Creado',
                    'El Usuario se creo correctamente',
                    'success'
                )
              
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error, vuelve a intentarlo'
            })
        }

    }
   const  handlePrevent= e=>{
        e.preventDefault();
    }



    return (
        <>
        <GlobalStyle />
      <LoginForm onSubmit={handlePrevent}>
        <LoginFlex>
           
            
            <ButtonLoginH1>Agregar Usuarios</ButtonLoginH1>
        </LoginFlex>
       

        <HrLogin />
        <LoginLabel htmlFor="nombre"><LoginFlex>
            <LoginLabelP>Nombre</LoginLabelP>
            <LoginEmail type="text" name="name" id="name" placeholder="Nombres"  onChange={handleInputChange}  required ></LoginEmail><br /><br /></LoginFlex>

        <LoginLabel htmlFor="email"><LoginFlex>
            <LoginLabelP>Email</LoginLabelP>
            <LoginEmail type="email" name="email" id="email" placeholder="Correo Electronico"  onChange={handleInputChange}  required ></LoginEmail><br /><br /> </LoginFlex>
             
        
        <LoginLabel htmlFor="username"><LoginFlex>
            <LoginLabelP>Nombre de Usuario </LoginLabelP>
            <LoginEmail type="text" name="username" id="username" placeholder="Ingrese Nombre de usuario"  onChange={handleInputChange}  required ></LoginEmail><br /><br /> </LoginFlex>
            <LoginFlex><LoginLabelP>Direccion</LoginLabelP>
            <LoginEmail type="text" name="street" onChange={handleInputChange} id="password" placeholder="direccion"   required ></LoginEmail><br /><br />
           
            <LoginButton onClick={()=>AddUser()} > <LoginH1G>Registrar</LoginH1G></LoginButton><br />
            <LoginRegistrar href="/login" id="register">Regresar</LoginRegistrar></LoginFlex> 
            <br />
            
        </LoginLabel></LoginLabel></LoginLabel>
    </LoginForm>
        </>
    )
}

export default AddUser
