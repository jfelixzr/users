import React,{useEffect, useRef, useState} from 'react'
import styled from 'styled-components';
import {  createGlobalStyle  } from 'styled-components';
import axios from 'axios';

import Swal from 'sweetalert2'
import { useHistory, Link } from 'react-router-dom'


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
const Table=styled.table`

border-collapse: collapse;
width: 100%;`
	


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
`;

	



const Th=styled.th`
padding:15px;
width: 25%;
text-align: left;
vertical-align: top;
`;

const Td=styled.td`


  width: 25%;
  text-align: left;
  
`;

const Thead=styled.thead`


border-bottom: solid 5px #0F362D;
color: white;

`;
	
const Tr=styled.tr`

text-align:left;

color: white;
width:50%;
`;

const Img =styled.img`
 width:100px;
    height:100px;
    border-radius:160px;
    `





const Inicio = (props) => {

  const history = useHistory()
  const [user, setUser] = useState([])

  useEffect(() => {
    userInfo()
      .then(usuario => setUser(usuario))
  }, [])

  const userInfo = async() => {
  const url = `https://jsonplaceholder.typicode.com/users`
  const resp = await axios.get(url)
  const data = await resp.data
  console.log(data)
  return data
}

const eliminarUser= id => {
  console.log('eliminando', id);

  
  Swal.fire({
    title: '¿Estas Seguro?',
    text: "Una vez eliminado un usuario no podras recuperarlo",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminar',
    cancelButtonText: 'Cancelar'

  }).then(async (result) => {
    if (result.value) {
      try {

        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        const resultado = await axios.delete(url);
        if (resultado.status === 200) {
          Swal.fire(
            'Eliminado!',
            'El Usuario se ha eliminado',
            'success'
          )
          history.push('/')
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
  })
}


const handleDelete = (id) => {
  eliminarUser(id)
}




return (
  <>
  <GlobalStyle />
  
    {
      user.map(users => {
        return (
          <>
            <Table key={users.id}>
            
            

      <Thead>Datos del Usuario</Thead>
      <tr style={{position:"absolute", marginLeft:"140px",fontSize:"30px",color:"white"}}>  <button 
                onClick={() => handleDelete(users.id)}> eliminar
                
              </button> 
              <Link style={{textDecoration:"none", fontSize:"30px",color:"white",marginLeft:"5px", }}
                to={`/edit/${users.id}`} 
                
              >Editar </Link>
               </tr><br />
			<Tr><Th>Nombres: </Th>
				<Td>{users.name}</Td>
			</Tr>
			
      <Tr><Th>Nombre de Usuario: </Th>
				<Td>{users.username}</Td>
			</Tr>
      <Tr><Th>Email: </Th> 
        <Td>{users.email}</Td>
      </Tr>
       <Tr><Th>Direccion: </Th> 
        <Td>{users.address.street}</Td>
        <Td>{users.address.suite}</Td>
         <Td>{users.address.zipcode}</Td>
         
      </Tr>
      <Tr><Th>Geo: </Th> 
         <Td>{users.address.geo.lat}</Td>
         <Td>{users.address.geo.lng}</Td></Tr>
      <Tr><Th>Telefono: </Th> 
        <Td>{users.phone}</Td>
      </Tr>
      <Tr><Th>Telefono: </Th> 
        <Td>{users.phone}</Td>
      </Tr>
      <Tr><Th>Sitio web: </Th> 
        <Td>{users.website}</Td>
      </Tr>
      <Tr><Th>Compañia: </Th> 
        <Td>{users.company.cname}
        {users.company.catchPhrase}
        {users.company.bs} </Td>
      </Tr>

      <br />
      <br />
      
            
      </Table>
          
           </>
           

              

          

            
          
        )
      })
    }

  </>
)
}

export default Inicio