import { useState, useEffect } from "react"
import Cliente from "../component/Cliente";
const Inicio = () => {


  const [clientes, setCliente] = useState([]);

  useEffect(() => {

    const obtenerClienteApi = async () => {

      try {
        const url = 'http://localhost:4000/cliente'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
    }
    obtenerClienteApi()

  }, [])

  const handleEliminar =async id =>{
    
    const confirmar = confirm('Deseas Eliminar Este Cliente?')

    if(confirmar){
       try {
         const url = `http://localhost:4000/cliente/${id}`
         const respuesta = await fetch(url,{
           method: 'DELETE'
         })
         
         await respuesta.json()
         const arrayCliente = clientes.filter(cliente => cliente.id !== id)

         setCliente(arrayCliente)
       } catch (error) {
         console.log(error);
       }

    }

  }

  return (
    <>


      <h1 className='font-black text-4xl text-blue-900' > Cliente</h1>
      <p className='mt-3'>Administra tu clientes </p>

      <table className="w-full mt-5 table-auto shadow bg-white">

        <thead className="bg-blue-800 text-white">
          <tr>

            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
         
         <tbody>

          {clientes.map(cliente => (
              <Cliente
                key={cliente.id}
                cliente={cliente}
                handleEliminar={handleEliminar}
              />
          ))}

         </tbody>
      </table>



    </>
  )
}

export default Inicio