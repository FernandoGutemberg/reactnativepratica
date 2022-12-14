import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  Image 
  } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {

    };
  }
  
  render(){
    return(
      <View style={styles.container}>

      <Image
        source={require('./src/biscoito.png')}
        style={styles.img}
      />

      <Text style={styles.textoFrase}>Alguma frase aqui</Text>

      <TouchableOpacity style={styles.botao}>
        <View style={styles.btnArea}>
          <Text styles={styles.btnTexto} >Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 350,
    height: 350,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});


export default App;