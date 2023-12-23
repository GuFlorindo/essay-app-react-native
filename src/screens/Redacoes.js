import React, { Component } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class Redacoes extends Component{
    

    render(){
        return(
           <ScrollView>
            <View>
                <View style={styles.container}>
                <View style={styles.dados}>
                  <Text style={styles.dadosText}> {this.props.descricao} </Text>
                    <Text style={styles.dadosText}>{this.props.tema} </Text>
                    <Text style={styles.dadosText}> {this.props.introducao}</Text>
                    <Text style={styles.dadosText}>{this.props.desenvolvimento}</Text>
                    <Text style={styles.dadosText}> {this.props.conclusao}</Text>  
                </View>
                <View>
                    <Image style={{height:250, width:200,zIndex:1}} source={{uri:this.props.imagem}}/>
                    <Text style={{position:'absolute', zIndex:0, top:120,right:60 }}>sem imagem</Text>
                </View>
                
            </View>
            
               <TouchableHighlight style={styles.botao} onPress={()=>this.props.Remover(this.props.id)}>
                  <Text style={styles.botaoText}>Remover</Text>
                </TouchableHighlight>
            </View>
           </ScrollView>
           
            
        )       
    }
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "purple",
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        borderRadius:10,
       
        
    },
    botaoText:{
        color: "white",
        fontSize:15,
    },
    container:{
        alignItems: "center",
        justifyContent:"space-between",
        margin:10,
        display:"flex",
        flexDirection:"row"
    },
    dados:{
        backgroundColor:"#a6ddff",
        padding: 15,
        borderRadius:15,
        marginVertical:5,
        width:"50%"
    },
    dadosText:{
        fontSize: 20,
        margin:5,
        color:"black",
    },
    dadosTextTitle:{
        fontSize: 20,
        margin:5,
        color:"black",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
    },
})