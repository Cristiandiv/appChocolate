import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Nestle() {
  return (
    <ImageBackground style={styles.container} source={require('../assets/fundo.gif')}>
      
      <View style={styles.viewTitulo}>
      <Text style={[styles.titulo, {color: '#ffffff'}]}>Hershey´s</Text>
      </View>

    <ScrollView>

      <View style={[styles.viewStyle, {backgroundColor: '#ffffff'}]}>
        <Image style={styles.styleImage} source={require('../assets/hershey.jpg')}/>
        <Text style={[styles.texto , {color: '#000000'}]}>
        
O INÍCIO DE UM SONHO

Milton Hershey nasceu na Pensilvânia, Estados Unidos, em 1857. Sua paixão pela
confeitaria surgiu já aos 14 anos, quando foi aprendiz de um metre confeiteiro
em Lancaster. Nessa época, Hershey pode observar na prática como o chocolate
era feito e vendido praticamente como um artigo de luxo, não sendo acessível a
toda a a população. Isso despertou um sonho: por que não democratizar o
acesso ao chocolate?

        </Text>
        <Text style={[styles.texto , {color: '#000000'}]}>

            
MUITO ALÉM DOS NEGÓCIOS

Milton Hershey conseguiu muito mais do que seu sonho inicial: democratizar o
acesso ao chocolate. Ele e Catherine fizeram isso espalhando amor e educação.
Até os dias de hoje, mesmo após o falecimento de Milton, em 1945, a
Hershey continuou nos trilhos do sucesso baseado na visão do chocolatier, filantropo,
inovador e empreendedor social, Milton Hershey. A empresa criou e adquiriu
diversas marcas, como Kisses, Reese's, York, Twizzlers, Jolly Rancher, 5th Avenue,
Almond Joy, entre muitas outras. E mantém com grande foco a Milton Hershey
School, na Pensilvânia, Estados Unidos. 
        </Text>

      </View>

      </ScrollView>

      <StatusBar style="auto" />

     
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginTop: 40
  },

  viewStyle:{
    alignItems: 'center',
    backgroundColor: '#dcdcdc',
    opacity: 0.72,
    borderRadius: 10,
    margin: 10
  },

  viewTitulo:{
  alignItems: 'center',
  margin: 6,
  borderRadius: 10,
  backgroundColor: '#5D4037',
  },

  titulo:{
    justifyContent: 'center',
    fontSize: 30,
    color: '#000000'
  },

  styleImage:{
    resizeMode: 'contain',
    width: 250,
    height: 200,
    margin: 6
  },

  texto:{
    margin: 12,
    textAlign: 'justify',
    fontSize: 20,

  },

});
