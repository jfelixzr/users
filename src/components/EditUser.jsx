import React,{useEffect, useRef, useState} from 'react'
import styled from 'styled-components';
import {  createGlobalStyle  } from 'styled-components';
import axios from 'axios';

import Swal from 'sweetalert2'

import { useHistory } from 'react-router-dom'
import {useForm} from '../hooks/useForm'

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
    padding: 12px 19px;
    border-radius: 17px;
    background-color:#9875F3;
    color: white;
    width: 170px;
    text-align: center;
    line-height: 12px;
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
const LoginButton1=styled.button`
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
    width:70%;
    
    margin-left:90px;
}
`;

const ButtonLoginH1=styled.h1`

    margin-top: 5vh;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
      
    
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
    width:100%
}`;

const LoginH1G=styled.h2`
font-size: 16px;
text-align:center;
margin-left:6px;
`
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
    `
const url='https://jsonplaceholder.typicode.com/users';
const EditUsers = (props) => {

    const nameRef = useRef('');
    const userNameRef=useRef('');
    const emailRef=useRef('');
    const streetRef = useRef('');
    const suiteRef = useRef('');
    const cityRef = useRef('');
    const zipcodeRef= useRef('');
    const latRef= useRef('');
    const lngRef= useRef('');
    const phoneRef= useRef('');
    const websiteRef= useRef('');
      const cnameRef= useRef('');
      const catchPhraseRef= useRef('');
      const bsRef= useRef('');

    const history = useHistory()
    const [users, setUsers] = useState([])




    const { id
    } = users

      const handleInputChange = (e) => {

        setUsers({
            ...users,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {
      userInfo()
        .then(users => setUsers(users))
    },[])

  
    const userInfo = async () => {
      const url = `https://jsonplaceholder.typicode.com/users/${props.match.params.id}`
      const res = await axios.get(url)
      const data = await res.data
      console.log("Editar",data)
      return data
    }
 
    const editarUsuario = async e => {
        
        const newUser = userNameRef.current.value,
            newName = nameRef.current.value,
            newEmail=emailRef.current.value,
            newStreetRef = streetRef.current.value,
            newSuiteRef = suiteRef.current.value,
            newCityRef=cityRef.current.value,
             newZipcodeRef=zipcodeRef.current.value,
              newLatRef=latRef.current.value,
               newLngRef=lngRef.current.value,
                newPhoneRefRef=phoneRef.current.value,
                 newWebsiteRef=websiteRef.current.value,
                  newCnameRef=cnameRef.current.value,
                   newCatchPhraseRef=catchPhraseRef.current.value,
                   newBsRef=bsRef.current.value

     
        const editarUser = {
            id,
            username:newUser, 
                 
                    
                 name:newName,
                 
                 email:newEmail,
                address:{
                    street:newStreetRef,
                    suite:newSuiteRef,
                    city:newCityRef,
                    zipcode:newZipcodeRef,
                geo:{lat:newLatRef,
                lng:newLngRef}
                },
                phone:newPhoneRefRef,
                website:newWebsiteRef,
                company:{name:newCnameRef,
                catchPhrase:newCatchPhraseRef,
                bs:newBsRef
        }
}
        
        try {
            const url = `https://jsonplaceholder.typicode.com/users/${props.match.params.id}`;
            const resultado = await axios.put(url, editarUser);

            if (resultado.status === 200) {
                Swal.fire(
                    'Usuario Editado',
                    'El usuario se editó correctamente',
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
        
        history.push('/');
        window.location.href="./";
    }
   const handlePreventE= e=>{
        e.preventDefault();
    }
    
  
    
      
        return (
            <>
            <GlobalStyle />
          <LoginForm onSubmit={handlePreventE}>
            <LoginFlex>
               
                <ButtonLoginH1>Editar Usuario</ButtonLoginH1>
            </LoginFlex>
           
    
            <HrLogin /> <LoginFlex>
            <LoginLabel htmlFor="nombre">
                <LoginLabelP>Nombre</LoginLabelP>
                <LoginEmail type="text" name="name" id="name" defaultValue={users.name}  ref={nameRef} onChange={handleInputChange}  required ></LoginEmail><br /><br /></LoginLabel>

            <LoginLabel htmlFor="email">
                <LoginLabelP>Correo Electronico</LoginLabelP>
                <LoginEmail type="email" name="email" id="email" ref={emailRef} defaultValue={users.email}  onChange={handleInputChange}  required ></LoginEmail><br /><br /></LoginLabel>
                 
            
            <LoginLabel htmlFor="username">
                <LoginLabelP>Nombre de Usuario </LoginLabelP>
                <LoginEmail type="text" name="username" id="username" defaultValue={users.username} ref={userNameRef} onChange={handleInputChange}  required ></LoginEmail><br /><br />
              
                
             </LoginLabel>

                <LoginLabel htmlFor="street">
                <LoginLabelP>Direccion </LoginLabelP>
                <LoginEmail type="text" name="street" id="street"   ref={streetRef} onChange={handleInputChange}  required ></LoginEmail><br /><br />
                <LoginEmail type="text"  name="suite" id="suite"  ref={suiteRef} onChange={handleInputChange}  required ></LoginEmail><br /><br />
               <LoginEmail type="text" name="city" id="city"  ref={cityRef} onChange={handleInputChange}  required ></LoginEmail><br /><br />
                 <LoginEmail type="text" name="zipcode" id="zipcode"  ref={zipcodeRef} onChange={handleInputChange}   required ></LoginEmail><br /><br />
                  <LoginLabelP>Geo </LoginLabelP>
                 <LoginEmail type="text" name="lat" id="lat"  ref={latRef} onChange={handleInputChange}  required ></LoginEmail><br /><br />
                 <LoginEmail type="text" name="lng" id="lng"  ref={lngRef} onChange={handleInputChange}  required ></LoginEmail><br /><br />
             </LoginLabel>
            <LoginLabel htmlFor="phone">
                <LoginLabelP>Telefono</LoginLabelP>
                <LoginEmail type="text" name="phone" id="phone" defaultValue={users.phone} ref={phoneRef} onChange={handleInputChange}  required ></LoginEmail><br /><br />
              
                
             </LoginLabel>
               <LoginLabel htmlFor="website">
                <LoginLabelP>Sitio Web</LoginLabelP>
                <LoginEmail type="text" name="website" id="website" defaultValue={users.website} ref={websiteRef} onChange={handleInputChange}  required ></LoginEmail><br /><br />
              
                
             </LoginLabel>
  <LoginLabel htmlFor="website">
                <LoginLabelP>company</LoginLabelP>
                <LoginEmail type="text" name="cname" id="cname"  ref={cnameRef} onChange={handleInputChange}  required ></LoginEmail><br /><br />
               <LoginEmail type="text" name="catchPhrase" id="catchPhrase"  ref={catchPhraseRef} onChange={handleInputChange}  required ></LoginEmail><br /><br />
                <LoginEmail type="text" name="bs" id="bs" ref={bsRef} onChange={handleInputChange}  required ></LoginEmail><br /><br />
             </LoginLabel>

             <LoginButton onClick={()=>editarUsuario()}> <LoginH1G>Editar</LoginH1G></LoginButton> </LoginFlex>
        </LoginForm>
            </>
        )
    }

    export default EditUsers