import { useLocation, useParams } from "react-router"
import { Navegacion } from "../components/Navegacion"
import { useEffect, useState } from "react";

import api from "../api/api";

export const ArticuloPage = () => {

    const params = useParams();
    const location = useLocation();
    const { state } = location;
    const [contenido, setContenido] = useState('');
    const [dia, setDia] = useState(state.dia);
    const [hora, setHora] = useState(state.hora);

  

    const obtenerArticulo = async () => {

        try {
            const resp = await api.get(`/articulos/articulo/${params.id}`);
            setContenido(resp.data.articulo[0]);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerArticulo();
    }, [])
    return (
        <>
            <Navegacion />
            <div className="articulo-page">
                <div className="header">
                    <h3>{contenido.titulo}</h3>
                    <p>{dia[0] + " " + hora} </p>
                    <p>by ADMIN</p>
                </div>
                <img src={contenido.imagen} alt="" />
                <div className="desc" dangerouslySetInnerHTML={{__html: contenido.descripcion}}>

                </div>
            </div>
        </>
    )
}
