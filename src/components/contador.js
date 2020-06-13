import React from 'react'
import { View, Text } from 'react-native'

class Contador extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 5,
            indice: props.indicePergunta
        }
        this.start = this.start.bind(this)
    }
    componentDidMount() {
        this.start()
    }
    start() {
        clearInterval(this.contador);
        this.contador = setInterval(() => {
            this.setState(state => ({ count: state.count - 1 }))
        }, 1000);
    }

    componentDidUpdate() {
        if(this.props.indicePergunta > this.state.indice){
            this.setState({count: 5, indice:this.props.indicePergunta })
        }
        if (this.state.count === 0 && this.props.gambis === 0) {
            clearInterval(this.contador);
            this.setState({ count: 5 })
            this.props.contadorZerou()
        }
    }

    componentWillUnmount(){
        clearInterval(this.contador)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.contador}>
                    {this.state.count}
                </Text>
            </View>
        )

    }
}

const styles = {
    container:{
        justifyContent: 'flex-end',
        backgroundColor: '#172178',
        borderRadius: 20,
        margin: 10,
        height: 50,
        width: 50,
        borderWidth: 2,
        borderColor: "#ffdd55",
        
    },
    contador: {
        lineHeight: 50,
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
    }
}

export default Contador