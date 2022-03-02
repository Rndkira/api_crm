import {useEffect,useState} from 'react'
import { useParams } from "react-router-dom"
import Formulario from '../component/Formulario'
import Spinner from '../component/Spinner'


const EditarCliente = () => {


  

  const [cliente, setCliente] = useState({});
  const [cargando, setcargando] = useState(true);
  const {id} = useParams()

  useEffect(() =>{
     
      const obtenerClienteApi = async () =>{

          try {
              const url = `http://localhost:4000/cliente/${id}`
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
              setCliente(resultado);
             
              
              
          } catch (error) {
              console.log(error);
          }

          setcargando(!cargando)
      }

      setTimeout(() => {
      obtenerClienteApi()
          
      }, 2500);

      
  },[])

  return (
    <>
    
    
     <h1 className='font-black text-4xl text-blue-900' >Editar Cliente</h1>
     <p className='mt-3'>Utiliza este Formulario para editar un cliente</p>
    
    {cliente?.nombre ? (
     <Formulario
     cliente ={cliente}
     cargando={cargando}
   />

    ): <p> Cliente ID no valido</p>   }
      
    
    </>
  )
}


export default EditarCliente