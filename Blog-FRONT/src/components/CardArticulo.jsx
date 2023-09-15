/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';


export const CardArticulo = ({id,titulo,desc,fecha, img}) => {

  const dia = fecha.split('T');
  const hora = dia[1].split(":").slice(0, 2).join(":");
  return (
   <>
    <div className="articulo-container">
      <img src={img} alt={titulo} />
      <div className='articulo-inner'>
        <NavLink 
        className="navlink" 
        to={`/articulo/${id}`}
        state={{dia: dia, hora: hora}}>
          <h1>{titulo}</h1>
        </NavLink>
        <p><strong>ADMIN </strong>{dia[0] +" - "+ dia[1].split(":").slice(0, 2).join(":")}</p>
        <p>Este jueves 14 de septiembre desde las 22, La Casa del Folclorista de Santiago del Estero estará compartiendo una noche plena de música con Pigu Herrera.</p>
      </div>
    </div>
   </>
  )
}
