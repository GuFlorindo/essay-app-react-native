
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default function Home({navigation})
{
  
  return(
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Escreva')}>
        <Text>Escreva</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Dicas')}>
        <Text>Dicas e repertórios</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>navigation.navigate('Lista de redações')}>
        <Text>Redações escritas</Text>
      </TouchableOpacity>
    </View>
  )
}

