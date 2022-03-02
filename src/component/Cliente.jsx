import { useNavigate } from "react-router-dom"

const Cliente = ({cliente,handleEliminar}) => {

    const navigate = useNavigate()



    const {nombre,empresa,email,telefono,notas,id} = cliente
  return (
    <tr className='border-b hover:bg-gray-50'>
       <td className='p-3'>{nombre} </td>  
       <td className='p-3'> 
           <p className='text-gray-800 uppercase font-bold'> <span>{empresa}</span></p>
           <p className='text-gray-800 uppercase font-bold'> <span>{email}</span></p>
        </td>  
       <td className='p-3'>{telefono} </td>  
       <td className='p-3'>{notas}

       <button
            type='button'
            className='bg-yellow-500 hover:bg-yellow-600 block w-full p-2 
            font-bold text-xs text-white uppercase  '
            onClick={() => navigate(`/clientes/${id}`)}
            >Ver</button>

           <button
            type='button'
            className='bg-blue-600 hover:bg-blue-700 block w-full p-2 
             font-bold text-xs text-white uppercase mt-3'
             onClick={() => navigate(`/clientes/editar/${id}`)}
           >Editar</button>

           <button
            type='button'
            className='bg-red-600 hover:bg-red-700 block w-full p-2 
            font-bold text-xs text-white uppercase mt-3 '
            onClick={() => handleEliminar(id)}
            >Eliminar</button>
             
         </td>  
         
    </tr>
  )
}

export default Cliente