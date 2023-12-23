import React, { Component } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class Redacoes extends Component{
    

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.dados}>
                  <Text style={styles.dadosText}> {this.props.descricao} </Text>
                    <Text style={styles.dadosText}>Tema: {this.props.tema} </Text>
                    <Text style={styles.dadosText}>Introdução: {this.props.introducao}</Text>
                    <Text style={styles.dadosText}>desenvolvimento: {this.props.desenvolvimento}</Text>
                    <Text style={styles.dadosText}>Conclusão: {this.props.conclusao}</Text>  
                </View>
                <View>
                    <Image style={{height:200, width:200}} source={{uri:this.props.imagem}}/>
                </View>
                <View style={styles.botoes}>
                    <View >
                        <TouchableHighlight style={styles.botao} onPress={()=>this.props.Remover(this.props.id)}>
                            <Text style={styles.botaoText}>Remover</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            
        )       
    }
}

const styles = StyleSheet.create({
    botao: {
        color: "white",
        backgroundColor: "purple",
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        borderRadius:10
    },
    botaoText:{
        color: "white",
        fontSize:15,
    },
    botoes:{
        alignItems: "center",
        justifyContent: "center",

        flexDirection:"row",
    },
    container:{
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
    },
    dados:{
        backgroundColor:"#a6ddff",
        padding: 15,
        borderRadius:15,
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
    }
})