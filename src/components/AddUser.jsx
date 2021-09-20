import React,{useState} from 'react'
import styled from 'styled-components';
import {  createGlobalStyle  } from 'styled-components';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import uuid from 'react-uuid'

import Swal from 'sweetalert2'



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

    const { id, name,username,email, 
    address:{street,suite,city,zipcode,
    geo:{lat,lng}},
    phone,
    website,
    company:{cname,catchPhrase,bs}
    } = user
    

    const handleInputChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

   


    const AddUser = async () => {


        try {
            const resultado = await axios.post(`https://jsonplaceholder.typicode.com/users`, {
                id:uuid(),
              
                 name:name,
                 username:username,
                 email:email, 
                address:{street:street,
                suite:suite,
                city:city,
                zipcode:zipcode,
                geo:{lat:lat,
                lng:lng}},
                phone:phone
                ,website:website
                ,company:{name:cname,
                catchPhrase:catchPhrase,
                bs:bs
                
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
             <LoginLabel >
                <LoginLabelP>Nombre</LoginLabelP>
                <LoginEmail type="text" name="name" id="name" onChange={handleInputChange}  required ></LoginEmail><br /><br /></LoginLabel>

            <LoginLabel htmlFor="email">
                <LoginLabelP>Correo Electronico</LoginLabelP>
                <LoginEmail type="email" name="email" id="email" onChange={handleInputChange}  required ></LoginEmail><br /><br /></LoginLabel>
                 
            
            <LoginLabel htmlFor="username">
                <LoginLabelP>Nombre de Usuario </LoginLabelP>
                <LoginEmail type="text" name="username" id="username" onChange={handleInputChange}  required ></LoginEmail><br /><br />
              
                
             </LoginLabel>

                <LoginLabel htmlFor="street">
                <LoginLabelP>Direccion </LoginLabelP>
                <LoginEmail type="text" name="street" id="street"   onChange={handleInputChange}  required ></LoginEmail><br /><br />
                <LoginEmail type="text" name="suite" id="suite"   onChange={handleInputChange}  required ></LoginEmail><br /><br />
               <LoginEmail type="text" name="city" id="city"   onChange={handleInputChange}  required ></LoginEmail><br /><br />
                 <LoginEmail type="text" name="zipcode" id="zipcode"   onChange={handleInputChange}  required ></LoginEmail><br /><br />
                  <LoginLabelP>Geo </LoginLabelP>
                 <LoginEmail type="text" name="lat" id="lat" d  onChange={handleInputChange}  required ></LoginEmail><br /><br />
                 <LoginEmail type="text" name="lng" id="lng"  onChange={handleInputChange}  required ></LoginEmail><br /><br />
             </LoginLabel>
            <LoginLabel htmlFor="phone">
                <LoginLabelP>Telefono</LoginLabelP>
                <LoginEmail type="text" name="phone" id="phone"   onChange={handleInputChange}  required ></LoginEmail><br /><br />
              
                
             </LoginLabel>
               <LoginLabel htmlFor="website">
                <LoginLabelP>Sitio Web</LoginLabelP>
                <LoginEmail type="text" name="website" id="website"   onChange={handleInputChange}  required ></LoginEmail><br /><br />
              
                
             </LoginLabel>
  <LoginLabel htmlFor="website">
                <LoginLabelP>company</LoginLabelP>
                <LoginEmail type="text" name="cname" id="cname"   onChange={handleInputChange}  required ></LoginEmail><br /><br />
               <LoginEmail type="text" name="catchPhrase" id="catchPhrase"   onChange={handleInputChange}  required ></LoginEmail><br /><br />
                <LoginEmail type="text" name="bs" id="bs"   onChange={handleInputChange}  required ></LoginEmail><br /><br />
             </LoginLabel>
            <LoginButton onClick={()=>AddUser()} > <LoginH1G>Agregar Usuario</LoginH1G></LoginButton><br />
            <LoginRegistrar href="/" id="register">Regresar</LoginRegistrar></LoginFlex> 
            <br />
            
        </LoginLabel>
    </LoginForm>
        </>
    )
}

export default AddUser
