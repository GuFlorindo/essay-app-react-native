import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'

export default class Dicas extends Component{
    

    render(){
        return(
            <ScrollView >
                <View style={styles.container}>
                    
                    <Text style={styles.title}>Principais dicas para o ENEM </Text>
                    
                        <Text style={styles.normalText}>
                        Escrever uma redação convincente e bem estruturada no Exame Nacional do Ensino Médio (ENEM) requer habilidades específicas que vão além do conhecimento sobre o tema proposto. Dominar essas técnicas pode ser crucial para obter uma pontuação alta e se destacar na avaliação. Por isso preparamos algumas dicas:
                        </Text> 
                        <Text Text style={styles.text}>COMPREENDA O TEMA: Antes de começar a escrever, leia cuidadosamente o tema proposto e os textos motivadores fornecidos. Certifique-se de entender completamente a abordagem esperada e os pontos-chave que devem ser explorados em sua redação.</Text>
                        
                        <Text Text style={styles.text}>ESTRUTURA ADEQUADA: Siga a estrutura clássica de uma redação dissertativa-argumentativa, que inclui introdução, desenvolvimento de argumentos e conclusão. A introdução deve apresentar o tema e sua tese; o desenvolvimento explora argumentos consistentes; e a conclusão retoma a tese e fecha os pontos discutidos.</Text>
                    
                        <Text Text style={styles.text}> COERÊNCIA E COESÂO: Mantenha uma linha lógica de raciocínio ao longo da redação. Cada parágrafo deve estar conectado ao anterior, formando uma progressão natural de ideias. Use conectores e palavras de transição para melhorar a fluidez do texto.</Text>
                    
                        <Text Text style={styles.text}>ARGUMENTAÇÂO SÓLIDA: Suas opiniões devem ser respaldadas por evidências concretas, como dados estatísticos, exemplos históricos ou citações relevantes. Isso torna seus argumentos mais convincentes e sustentáveis.</Text>
                        
                        <Text Text style={styles.text}> CLAREZA E OBJETIVIDADEs: Evite linguagem excessivamente complexa e confusa. Procure ser claro e objetivo em suas colocações, tornando seu ponto de vista compreensível para qualquer leitor.</Text>
                    
                        <Text Text style={styles.text}>EVITE A FUGA DO TEMA: Mantenha-se focado no tema proposto. Desviar-se do assunto principal pode prejudicar a coesão e a coerência da sua redação.</Text>
                        
                        <Text Text style={styles.text}>RESPEITE OS DIREITOS HUMANOS: O ENEM preza pelos direitos humanos e valores sociais. Evite discursos preconceituosos, discriminatórios ou que desrespeitem a dignidade das pessoas.</Text>
                        
                        <Text Text style={styles.text}>PROPOSTA DE INTERVENÇÂO: Na conclusão, apresente uma proposta de intervenção que aborde a problemática discutida em sua redação. Essa proposta deve ser realista e bem fundamentada, demonstrando sua capacidade de pensar em soluções para questões complexas.</Text>
                        
                        <Text Text style={styles.text}>REVISÂO CUIDADOSA: Reserve tempo para revisar sua redação. Verifique erros de gramática, pontuação e ortografia. Além disso, avalie se a estrutura está clara e se seus argumentos são consistentes.</Text>
                        
                        <Text Text style={styles.text}>TREINE REGULARMENTE: A prática é fundamental para aprimorar suas habilidades de redação. Escreva regularmente sobre diferentes temas, seguindo as diretrizes do ENEM, para ganhar confiança e melhorar sua capacidade de argumentação e expressão escrita.</Text>
                    
                        <Text style={styles.title}>Sugestão de repertórios </Text>
                        <Text style={styles.title}>Citações:</Text>
                        <Text style={styles.text}>Machado de Assis: "Cometer a mesma injustiça é pior que sofrê-la."</Text>
                        <Text style={styles.text}>Monteiro Lobato: "Um país se faz com homens e livros."</Text>
                        <Text style={styles.text}>Clarice Lispector: "Que ninguém se engane, só se consegue a simplicidade através de muito trabalho."</Text>
                        <Text style={styles.text}>Sartre: "O homem está condenado a ser livre."</Text>
                        <Text style={styles.title}>Livros:</Text>
                        <Text style={styles.text}>1984" - George Orwell</Text>
                        <Text style={styles.text}>"Vidas Secas" - Graciliano Ramos  </Text>
                        <Text style={styles.text}>"O Cortiço" - Aluísio Azevedo</Text>
                        <Text style={styles.text}>"O Príncipe" - Maquiavel</Text>
                    
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
    title:{
      fontSize:30,
      fontWeight:"bold",
      color: "black",
      padding:30,
      borderColor:"blue",
      borderWidth:1,
      borderRadius:25
    },
    text:{
        margin:50,
        color:"white",
        lineHeight:25,  
        fontSize:18,
        fontWeight:"300",
        backgroundColor:"blue",
        padding:10,
        borderRadius:25
    },  
    normalText:{
      margin:50,
    color:"black",
    lineHeight:25,  
    fontSize:18,
    fontWeight:"300",  
    }
    
}) 

/*Interprete o tema proposto. ...
Delimite o tema. ...
Estruture o raciocíno. ...
Utilize linguagem formal. ...
Seja coerente nas argumentações. ...
Introduza citações.  */