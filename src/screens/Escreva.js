import React, { Component } from 'react'
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'
import Crud from '../banco/crud_rn'

export default class Escreva extends Component{
    constructor(props){
        super(props)
        this.state = 
        {
          tema : '',
          introducao : '',
          desenvolvimento : '',
          conclusao : '',
          imagem: '',
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
    
      Remover = (id)=> {
        const banco = new Crud()
        banco.Remover(id)
        this.listar()
      }

    render(){
        return(
        
        <View style={styles.container}>
            <View style={styles.nav}><Text style={styles.navTitle}>RedaçãoExpert</Text></View>
            <View><Text style={styles.title}>Cadastro de Redações</Text></View>
            <View>
            <TextInput  style={styles.input} onChangeText={(valor) =>{this.setState({tema: valor})}} placeholder='Tema...'></TextInput>
            <TextInput multiline = {true} numberOfLines = {5} style={styles.input} onChangeText={(valor) =>{this.setState({Introducao: valor})}}placeholder='introducao...'></TextInput>
            <TextInput multiline = {true} numberOfLines = {10} style={styles.input} onChangeText={(valor) =>{this.setState({Desenvolvimento: valor})}}placeholder='desenvolvimento...'></TextInput>
            <TextInput multiline = {true} numberOfLines = {5} style={styles.input} onChangeText={(valor) =>{this.setState({Conclusão: valor})}}placeholder='conclusao...'></TextInput>
            </View>
            <View>
            <TouchableOpacity style={styles.botao} onPress={()=>{this.inserir(this.state.tema, this.state.introducao, this.state.desenvolvimento, this.state.conclusao, this.state.imagem)}}>
                <Text style={styles.botaoText} >Salvar</Text>
            </TouchableOpacity>
            </View>
       </View> 
        )
    }
}
