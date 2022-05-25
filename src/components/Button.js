
import {Component} from 'react';


const styles = {
    button:{
        backgroundColor:'rgb(19 181 226)',
        color:'white',
        padding:'10px',
        border:'solid 1px black',
        borderRadius:'5px',
        cursor:'pointer'
    }
}
class Button extends Component{
    render(){
        return(
            <button style={styles.button} {...this.props}/>
        )
    }
}

export default Button;