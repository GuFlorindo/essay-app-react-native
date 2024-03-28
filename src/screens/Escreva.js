import React, { Component } from 'react'
import {
  TouchableOpacity
} from 'react-native'
import {
  Text,
  NativeBaseProvider,
  Box,
  FormControl,
  ScrollView,
  Input,
  TextArea,
  Pressable
} from 'native-base';
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
      <NativeBaseProvider>
        <ScrollView>
          <Box alignItems="center" justifyContent="center">
            <Text fontSize="30" padding="30" fontWeight="bold">Cadastro de Redações</Text>
            <Box borderRadius={"lg"} bgColor="blue.600">
               <FormControl m="5">
                <Text color={"white"}>Tema  </Text>
                <Input  color="white" fontSize={"15"} width={"300"} onChangeText={(valor) =>{this.setState({tema: valor})}} borderRadius="full"/>
                
                <Text color={"white"}>Introdução</Text>
                <TextArea mb="10" color="white" h={"40"} fontSize={"15"} width={"300"} onChangeText={(valor) =>{this.setState({introducao: valor})}} borderRadius="2xl"/>
              <Text color={"white"}>Desenvolvimento</Text>
                <TextArea mb="10" color="white" h={"80"} fontSize={"15"} width={"300"} onChangeText={(valor) =>{this.setState({desenvolvimento: valor})}} borderRadius="2xl"/>
              <Text color={"white"}>Conclusão</Text>
                <TextArea mb="10" color="white" h={"40"} fontSize={"15"} width={"300"} onChangeText={(valor) =>{this.setState({conclusao: valor})}} borderRadius="2xl"/>
              </FormControl>

            </Box>

            <Text fontSize="30" padding="30" fontWeight="bold">Ou envie manuscrito</Text>
            
            
            
              <RNCamera
                ref={ref => {
                this.camera = ref;
                }}
                style={{height:300, width:150, justifyContent: 'center', alignItems: 'center',}}
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
              <Box alignItems= 'center' justifyContent= 'center' flexDirection='collumn' >
                <TouchableOpacity style={{textAlign:'center', padding:10, paddingVertical:30, marginTop:20, backgroundColor:"grey",  borderRadius:100, borderColor:"black", borderWidth:2}} onPress={this.takePicture.bind(this)}>
                  <Text fontSize= "14" color="white">Tirar foto </Text>
                </TouchableOpacity>
              </Box>
              <Pressable   marginY="5" borderRadius="2xl" paddingY="5" paddingX="10" bgColor="blue.700" onPress={()=>{this.inserir(this.state.tema, this.state.introducao, this.state.desenvolvimento, this.state.conclusao,this.state.imagem)}}><Text color="white" fontSize="18">Salvar</Text></Pressable>
          </Box>  
        </ScrollView>
      </NativeBaseProvider>
       
        
        )
    }
}
