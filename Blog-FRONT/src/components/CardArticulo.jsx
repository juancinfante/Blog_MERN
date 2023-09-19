/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert'
import api from '../api/api';

export const CardArticulo = ({id,titulo,desc,fecha, img}) => {

  const dia = fecha.split('T');
  const hora = dia[1].split(":").slice(0, 2).join(":");

  const eliminarArticulo = (e) => {
    e.preventDefault();
    swal({
      title: "Estas seguro que deseas eliminar?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if (willDelete) {
        try {
          const resp = await api.delete(`/articulos/articulo/${id}`);
          console.log(resp);
          swal("Articulo eliminado!", {
            icon: "success",
          });
          setTimeout(() => {
            location.href = '/';
          }, "1500");
          
          
        } catch (error) {
          console.log(error);
        }
      }
    });
  }
  return (
   <>
    <div className="articulo-container">
      <img src={img} alt={titulo} />
      <div className='articulo-inner'>
        <div className="titulo">
        <NavLink className="navlink" to={`/articulo/${id}`} state={{dia: dia, hora: hora}}>
          <h1>{titulo}</h1>
        </NavLink>
        <div>
          <NavLink to={`/editar/${id}`}>
          <span>📝</span>
          </NavLink>
        <span onClick={eliminarArticulo}>❌</span>
        </div>
        </div>
        <p><strong>by ADMIN </strong>{dia[0] +" - "+ dia[1].split(":").slice(0, 2).join(":")}</p>
        <p>Este jueves 14 de septiembre desde las 22, La Casa del Folclorista de Santiago del Estero estará compartiendo una noche plena de música con Pigu Herrera.</p>
      </div>
    </div>
   </>
  )
}
