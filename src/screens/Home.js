import React from 'react';
import {
  Text,
  NativeBaseProvider,
  Box,
  Image,
  ScrollView,
  Pressable
} from 'native-base';


export default function App({navigation}){
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box>
        <Text textAlign="center" fontWeight="light" fontSize="5xl">Bem-vindo ao</Text>
      </Box>
      <Box shadow="9" bgColor='amber.200' marginX="2" borderWidth="1" borderRadius="3xl"  >
        <Text shadow="9" letterSpacing="xl" textAlign="center" color="blue.700" fontWeight="semibold" fontSize="5xl">Redação Expert</Text>
        </Box>

        <Image marginTop="15" source={{uri: "https://www.redacaonotadez.com.br/wp-content/uploads/2020/04/redacao-nota-dez-escrevendo.jpg"}} alt="garota escrevendo" width="100%" height="220" ></Image>
        <Box bgColor='amber.100'>
            <Text margin="2" fontSize="25" lineHeight="45" fontWeight="light" >No Redação Expert, cada palavra que você escreve é um passo em direção ao seu sucesso nos exames. Prepare-se de maneira completa e confiante para enfrentar os desafios das redações do ENEM e vestibulares. </Text>          
        </Box>
        <Text textAlign="center" marginY="15" fontSize="4xl">Comece!!</Text>
        <Box display="flex" alignItems="center">
          <Pressable  marginY="20" borderRadius="full" paddingY="5" paddingX="10" bgColor="blue.700" onPress={()=>navigation.navigate('Escreva')}><Text color="white" fontSize="18">Escreva</Text></Pressable>
          <Pressable  marginY="15" borderRadius="full" paddingY="5" paddingX="10" bgColor="blue.700" onPress={()=>navigation.navigate('Dicas')}><Text color="white" fontSize="18">Dicas e repertórios</Text></Pressable>
          <Pressable  marginY="20" borderRadius="full" paddingY="5" paddingX="10" bgColor="blue.700" onPress={()=>navigation.navigate('Lista de redações')}><Text color="white" fontSize="18" >Suas redações</Text></Pressable>
          
        </Box>
        
      </ScrollView>
      
    </NativeBaseProvider>
  );
};