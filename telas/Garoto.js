import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Nestle() {
  return (
    <ImageBackground style={styles.container} source={require('../assets/fundo.gif')}>
      
      <View style={styles.viewTitulo}>
      <Text style={[styles.titulo, {color: '#ffffff'}]}>Garoto</Text>
      </View>

    <ScrollView>

      <View style={[styles.viewStyle, {backgroundColor: '#ffffff'}]}>
        <Image style={styles.styleImage} source={require('../assets/garoto.jpg')}/>
        <Text style={[styles.titulo, {color: '#000000'}]}>
            Garoto: Tradição brasileira em chocolates há mais de 80 anos
        </Text>

        <Text style={[styles.texto , {color: '#000000'}]}>

A Chocolates Garoto, localizada em Vila Velha (ES), é uma das 10 maiores fábricas de chocolates do mundo. A empresa conta hoje com um portfólio de aproximadamente 70 produtos. Dentre os produtos que fabrica estão caixas de bombons, Tabletes, Ovos de Páscoa, e chocolate para uso culinário como coberturas e pó solúvel, que podem ser encontrados em mais de 50 países. Seus maiores sucessos são a Caixa Amarela e os Tabletes Familiares com a marca Garoto; os chocolates Baton e Talento e o bombom Serenata de Amor. Também oferece versões em sorvetes e picolés de algumas das suas principais marcas.
        
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
