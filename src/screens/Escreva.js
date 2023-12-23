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
import { RNCamera } from 'react-native-camera'  
import redacao from '../model/redacao'

export default class Escreva extends Component{
    constructor(props){
        super(props)
        this.state = 
        {
          tema : 'Sem tema ou manuscrito',
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
      takePicture = async () => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data.uri);
          this.setState({imagem: data.uri})
        }
      };
      inserir = (tema, introducao, desenvolvimento, conclusao, imagem)=>{
        const redacaoNova = new redacao(tema, introducao, desenvolvimento, conclusao, imagem)
        const banco = new Crud()
        banco.Inserir(redacaoNova)
        this.listar()
      }
      

    render(){
        return(
        <ScrollView>
         <View style={styles.container}>
            <View style={styles.nav}><Text style={styles.navTitle}>RedaçãoExpert</Text></View>
            <View><Text style={styles.title}>Cadastro de Redações</Text></View>
            <View>
            <TextInput  style={styles.input} onChangeText={(valor) =>{this.setState({tema: valor})}} placeholder='Tema...'></TextInput>
            <TextInput multiline = {true} numberOfLines = {5} style={styles.input} onChangeText={(valor) =>{this.setState({introducao: valor})}}placeholder='introducao...'></TextInput>
            <TextInput multiline = {true} numberOfLines = {10} style={styles.input} onChangeText={(valor) =>{this.setState({desenvolvimento: valor})}}placeholder='desenvolvimento...'></TextInput>
            <TextInput multiline = {true} numberOfLines = {5} style={styles.input} onChangeText={(valor) =>{this.setState({conclusao: valor})}}placeholder='conclusao...'></TextInput>
            </View>
            <Text style={styles.title}>Ou envie o manuscrito</Text>
            <View>
            
              <RNCamera
                ref={ref => {
                this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                console.log(barcodes);
                }}
              />
               <View style={{  alignItems: 'center', justifyContent: 'center', flexDirection:'collumn' }}>
                  <TouchableOpacity style={{textAlign:'center', padding:10, paddingVertical:30, marginTop:20, backgroundColor:"grey",  borderRadius:100, borderColor:"black", borderWidth:2}} onPress={this.takePicture.bind(this)}>
                  <Text style={{ fontSize: 14,color:"white", }}>Tirar foto </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.botao} onPress={()=>{this.inserir(this.state.tema, this.state.introducao, this.state.desenvolvimento, this.state.conclusao,this.state.imagem)}}>
                <Text style={styles.botaoText} >Salvar</Text>
              </TouchableOpacity>
            </View>
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
preview: {
      
  height:300,
  width:150,
  justifyContent: 'center',
  alignItems: 'center',
  
},
  botaoText:{
  color: "white",
  fontSize:15,
}
})