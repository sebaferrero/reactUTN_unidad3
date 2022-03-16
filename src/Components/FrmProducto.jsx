import React,{Component} from "react"
import logo from '../images/restoweb.png'
import './FrmProductoStyles.css'
class FrmProducto extends Component {
    render() { 
        const img={
            width: '300px',
            height: '200px',
            margin: 'auto',
            display: 'block'
        }
        const lbl={
            fontWeight: 'bold'
        }
        const description={
            fontStyle: 'italic'
        }
        
        return (
            <>
                <div className="div-producto">
                    <h1>miRestó Software Administración Bares</h1>
                    <p style={description}>
                        miRestó es un sistema que te ayudará a gestionar tu negocio de comidas de la manera mas eficiente posible.
                        <span style={lbl}>¡Disponible en TODOS los Dispositivos!</span>
                    </p>
                    <img src={logo} alt={'miResto'} style={img}/>
                    <span style={lbl}>SKU: 1231550.</span>
                    <br></br>
                    <span style={lbl}>DISPONIBILIDAD: ILIMITADA.</span>
                    <h1 className="price">$3.000 ARS/MES</h1>
                </div>
            </> 
        );
    }
}
 
export default FrmProducto;