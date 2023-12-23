import React, { Component } from 'react'
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'
import redacao from '../model/redacao'
import Crud from '../banco/crud_rn'
import Redacoes from './Redacoes'


export default class Listagem extends Component
{
  constructor(props){
    super(props)
    this.state = 
    {
      tema : '',
      introducao : '',
      desenvolvimento : '',
      conclusao : '',
      imagem : '',
      lista : []
    }
    this.listar()
  }

  listar = ()=>{
    const banco = new Crud()
    banco.Listar().then(
      listaCompleta =>{
        this.setState({ lista: listaCompleta})
      }
    )
  
  }

  inserir = (tema, introducao, desenvolvimento, conclusao, imagem)=>{
    const redacaoNova = new redacao(tema, introducao, desenvolvimento, conclusao, imagem)
    const banco = new Crud()
    banco.Inserir(redacaoNova)
    this.listar()
  }
  render()
{
  return(
    <ScrollView >
      <View style={styles.container}>
        
        <Text style={styles.title}>Lista de redações</Text>
        
        {this.state.lista.map(l=>(
          <Redacoes
            l={l}
            id={l.id}
            tema={l.tema}
            introducao={l.introducao}
            desenvolvimento={l.desenvolvimento}
            conclusao={l.conclusao}
            imagem={l.imagem}
            Remover={this.Remover}
          />
        ))

        }
      </View>
   
    </ScrollView>
  )
}
}
const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: "center",
},
  nav:{
    width:500,
    backgroundColor:"blue",
    alignItems: "center",
    
  },
  navTitle:{
    color:"white",
    fontSize:40,
    fontWeight:"200"
  },
  title:{
    fontSize:30,
    fontWeight:"bold",
    color: "black",
    padding:30,
  },
  input:{
    borderWidth:1,
    borderColor:"blue",
    borderRadius:25,
    color:"black",    
    marginTop:8,
    alignItems: "center",
    justifyContent: "center",
    width:250,
  },
  botao: {
    color: "white",
    backgroundColor: "blue",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius:10
},
  botaoText:{
  color: "white",
  fontSize:15,
}
})