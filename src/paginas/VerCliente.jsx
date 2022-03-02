import {useEffect,useState} from 'react'
import { useParams } from "react-router-dom"
import Spinner from '../component/Spinner'


const VerCliente = () => {
  
    const {id} = useParams()

    const [cliente, setCliente] = useState({});
    const [cargando, setcargando] = useState(true);

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

    cargando ? <Spinner/> : Object.keys(cliente).length === 0 ? <p>NO HAY RESULTADO</p> : (
    <div>
     
          <h1 className='font-black text-4xl text-blue-900' >Ver Cliente</h1>
          <p className='mt-3'>Informacion del Cliente</p>
         
         <p className='text-4xl text-gray-600 mt-10 '>
             <span className='text-gray-800 uppercase font-bold p-2'>Cliente:</span> 
             {cliente.nombre}
         </p> 
         <p className='text-2xl text-gray-600 mt-4 '>
             <span className='uppercase font-bold p-2'>Empresa:</span> 
             {cliente.empresa}
         </p>
         <p className='text-2xl text-gray-600 mt-4 '>
             <span className='text-gray-800 uppercase font-bold p-2'>Email:</span> 
             {cliente.email}
         </p>

         {cliente.telefono && (
             <p className='text-2xl text-gray-600 mt-4 '>
             <span className='text-gray-800 uppercase font-bold p-2'>Telefono:</span> 
             {cliente.telefono}
         </p>

         )}
    
          {cliente.notas && (
              <p className='text-2xl text-gray-600 mt-4 '>
              <span className='text-gray-800 uppercase font-bold p-2'>Notas:</span> 
              {cliente.notas}
          </p>
          )}
       
     </div>
   ) 
  )
}

  

export default VerCliente