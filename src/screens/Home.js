
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default function Home({navigation})
{
  
  return(
    <View style={styles.container}>
      <Text style={{fontSize:60, color:"black", textAlign:"center", marginBottom:100}}>Bem-vindo</Text>
      <TouchableOpacity  style={styles.botao} onPress={()=>navigation.navigate('Escreva')}>
        <Text style={styles.text}>Escreva</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Dicas')}>
        <Text style={styles.text}>Dicas e repertórios</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Lista de redações')}>
        <Text style={styles.text}>Redações escritas</Text>
      </TouchableOpacity> 
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: "center",  
  },
  botao: {
    backgroundColor: "blue",
    padding: 15,
    margin: 10,
    borderRadius:10,
    marginVertical:20
},
botoes:{
  justifyContent:"space-around"

},
text:{
  color:"white",
  textAlign:"center",


}  
})