import { Component } from "react";
import Button from "./Button";


const styles = {
    producto:{
        border:'solid 1px black',
        boxShadow:'0 5px 5px rgb(0,0,0,1)',
        width:'30%',
        padding:'10px 15px',
        borderRadius:'10px',
    },
    imageng:{
        width:'100%',
        height:'350px',
    }
}
class Producto extends Component{
    render(){
      const {producto, agregarAlCarro} = this.props
        return(
            <div style={styles.producto}>
                <img alt={producto.name} src={producto.img} style={styles.imageng}/>
                 <h3>{producto.name}</h3>
                 <p>{producto.price}</p>
                 <Button onClick={()=>agregarAlCarro(producto)}>
                     agregar al carrito
                 </Button>
            </div>
        )
    }

}

export default Producto;