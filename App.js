import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, } from 'react-native';

export default function App() {
  return (
    <ImageBackground style={styles.container} source={require('./assets/fundo.gif')}>
      
      <View style={styles.viewTitulo}>
      <Text style={[styles.titulo, {color: '#ffffff'}]}>Chocolates</Text>
      </View>

      <ScrollView>

      <View style={[styles.viewStyle, {backgroundColor: '#FFE082'}]}>
        <Text style={[styles.titulo , {color: '#EF6C00'}]}>Nestle</Text>
        <Image style={styles.styleImage} source={require('./assets/chocolate1.jpg')}/>
      </View>

      <View style={[styles.viewStyle, {backgroundColor: '#E57373'}]}>
        <Text style={[styles.titulo, {color: '#D50000'}]}>Garoto</Text>
        <Image style={styles.styleImage} source={require('./assets/chocolate2.jpg')}></Image>
      </View>

      <View style={[styles.viewStyle, {backgroundColor: '#A1887F'}]}>
        <Text style={[styles.titulo, {color: '#ffffff'}]}>Hershey´s</Text>
        <Image style={styles.styleImage} source={require('./assets/chocolate3.png')}></Image>
      </View>

      <StatusBar style="auto" />

      </ScrollView>
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

});
