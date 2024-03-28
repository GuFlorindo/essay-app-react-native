import React, { Component } from 'react'
import {
    Text,
    NativeBaseProvider,
    Box,
    Image,
    ScrollView,
    Pressable
  } from 'native-base';


export default class Redacoes extends Component{
    

    render(){
        return(
        <NativeBaseProvider>
        <ScrollView>
            <Box>
                <Box alignItems="center" justifyContent="space-between"  >
                        <Box backgroundColor="#a6ddff" padding="15" borderRadius="15"  width="100%" mb="5">
                    
                            <Text fontSize="20" margin="5" >{this.props.tema} </Text>
                            <Text fontSize="20" margin="5" > {this.props.introducao}</Text>
                            <Text fontSize="20" margin="5" >{this.props.desenvolvimento}</Text>
                            <Text fontSize="20" margin="5" > {this.props.conclusao}</Text>  
                        </Box>
                        <Box>
                            <Image style={{height:300, width:250,zIndex:1}} source={{uri:this.props.imagem}}/>
                            <Text style={{position:'absolute', zIndex:0, top:120,right:85 }}>sem imagem</Text>
                        </Box>
                
                    <Pressable backgroundColor="purple.700" padding="15" alignItems="center" justifyContent="center" margin="10" borderRadius="10" onPress={()=>this.props.Remover(this.props.id)}>
                        <Text color="white" fontSize="15">Remover</Text>
                    </Pressable>

                </Box>
                
                

            </Box>
            </ScrollView>
           </NativeBaseProvider>
           
           
            
        )       
    }
}