import React, { Component } from 'react'
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

export default class Dicas extends Component{
    

    render(){
        return(
            <NativeBaseProvider>
              <ScrollView >
                <Box alignItems={"center"} justifyContent="center">
                    
                    <Text fontSize={"30"} padding="30" borderWidth={"1"} borderRadius={"full"} borderColor={"blue.700"}>Principais dicas para o ENEM </Text>
                    
                        <Text margin="50"  lineHeight="25" fontSize="18" fontWeight="300">
                        Escrever uma redação convincente e bem estruturada no Exame Nacional do Ensino Médio (ENEM) requer habilidades específicas que vão além do conhecimento sobre o tema proposto. Dominar essas técnicas pode ser crucial para obter uma pontuação alta e se destacar na avaliação. Por isso preparamos algumas dicas:
                        </Text> 

                        
                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >COMPREENDA O TEMA: Antes de começar a escrever, leia cuidadosamente o tema proposto e os textos motivadores fornecidos. Certifique-se de entender completamente a abordagem esperada e os pontos-chave que devem ser explorados em sua redação.</Text>
                        </Box>
                        
                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >ESTRUTURA ADEQUADA: Siga a estrutura clássica de uma redação dissertativa-argumentativa, que inclui introdução, desenvolvimento de argumentos e conclusão. A introdução deve apresentar o tema e sua tese; o desenvolvimento explora argumentos consistentes; e a conclusão retoma a tese e fecha os pontos discutidos.</Text>
                        </Box>

                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >COERÊNCIA E COESÂO: Mantenha uma linha lógica de raciocínio ao longo da redação. Cada parágrafo deve estar conectado ao anterior, formando uma progressão natural de ideias. Use conectores e palavras de transição para melhorar a fluidez do texto.</Text>
                        </Box>

                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >ARGUMENTAÇÂO SÓLIDA: Suas opiniões devem ser respaldadas por evidências concretas, como dados estatísticos, exemplos históricos ou citações relevantes. Isso torna seus argumentos mais convincentes e sustentáveis.</Text>
                        </Box>

                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >CLAREZA E OBJETIVIDADE: Evite linguagem excessivamente complexa e confusa. Procure ser claro e objetivo em suas colocações, tornando seu ponto de vista compreensível para qualquer leitor.</Text>
                        </Box>

                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >EVITE A FUGA DO TEMA: Mantenha-se focado no tema proposto. Desviar-se do assunto principal pode prejudicar a coesão e a coerência da sua redação.</Text>
                        </Box>

                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >RESPEITE OS DIREITOS HUMANOS: O ENEM preza pelos direitos humanos e valores sociais. Evite discursos preconceituosos, discriminatórios ou que desrespeitem a dignidade das pessoas.</Text>
                        </Box>

                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >PROPOSTA DE INTERVENÇÂO: Na conclusão, apresente uma proposta de intervenção que aborde a problemática discutida em sua redação. Essa proposta deve ser realista e bem fundamentada, demonstrando sua capacidade de pensar em soluções para questões complexas.</Text>
                        </Box>

                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >REVISÂO CUIDADOSA: Reserve tempo para revisar sua redação. Verifique erros de gramática, pontuação e ortografia. Além disso, avalie se a estrutura está clara e se seus argumentos são consistentes.</Text>
                        </Box>

                        
                        
                  
                        <Text fontSize={"30"} width={"400"} m="5" padding="30" borderWidth={"1"} borderRadius={"full"} borderColor={"blue.700"}>Sugestão de repertórios </Text>
                        <Text fontSize={"30"} padding="30" borderWidth={"1"} borderRadius={"full"} borderColor={"blue.700"}>Citações:</Text>

                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >Machado de Assis: "Cometer a mesma injustiça é pior que sofrê-la."</Text>
                        </Box>

                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >Monteiro Lobato: "Um país se faz com homens e livros."</Text>
                        </Box>

                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >Clarice Lispector: "Que ninguém se engane, só se consegue a simplicidade através de muito trabalho."</Text>
                        </Box>

                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >Sartre: "O homem está condenado a ser livre."</Text>
                        </Box>
                        
                        <Text fontSize={"30"} padding="30" borderWidth={"1"} borderRadius={"full"} borderColor={"blue.700"}>Livros:</Text>
                        
                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >1984" - George Orwell</Text>
                        </Box>

                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >"Vidas Secas" - Graciliano Ramos</Text>
                        </Box>

                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >"O Cortiço" - Aluísio Azevedo</Text>
                        </Box>

                        <Box m="50" borderRadius="25" bgColor="blue.700">
                          <Text  color="white" lineHeight="25" fontSize="18" fontWeight="300" padding="10" >"O Príncipe" - Maquiavel</Text>
                        </Box>
                    
                </Box>
            </ScrollView>
            </NativeBaseProvider>
            
            
        )       
    }
}


/*Interprete o tema proposto. ...
Delimite o tema. ...
Estruture o raciocíno. ...
Utilize linguagem formal. ...
Seja coerente nas argumentações. ...
Introduza citações.  */