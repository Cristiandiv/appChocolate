import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Nestle() {
  return (
    <ImageBackground style={styles.container} source={require('../assets/fundo.gif')}>
      
      <View style={styles.viewTitulo}>
      <Text style={[styles.titulo, {color: '#ffffff'}]}>Nestle</Text>
      </View>

    <ScrollView>

      <View style={[styles.viewStyle, {backgroundColor: '#ffffff'}]}>
        <Image style={styles.styleImage} source={require('../assets/nestle.jpg')}/>
        <Text style={[styles.texto , {color: '#000000'}]}>Nestlé S.A. é uma empresa transnacional suíça do setor de alimentos e bebidas, com sede em Vevey, Vaud, na Suíça. Foi considerada a maior empresa de alimentos do mundo, medida por receitas e por outras métricas, nos anos de 2014, 2015 e 2016.[3][4][5][6] Ela foi classificada no 72º lugar na Fortune Global 500 em 2014[7] e na 33ª posição na edição 2016 da Forbes Global 2000, na lista das maiores empresas de capital aberto do mundo.[8]

Os produtos da Nestlé incluem alimentos para bebês, alimentos médicos, água engarrafada, cereais matinais, café e chá, produtos de confeitaria, produtos lácteos, sorvetes, alimentos congelados, alimentos para animais de estimação e lanches. Vinte e nove das marcas da Nestlé têm vendas anuais de mais de 1 bilhão de francos suíços (cerca de 1,1 bilhão de dólares),[9] como Nespresso, Nescafé, Kit Kat, Smarties, Nesquik, Stouffer's, Vittel, Garoto e Maggi. A Nestlé possui 447 fábricas, opera em 194 países e emprega cerca de 339 mil pessoas.[10] É um dos principais acionistas da L'Oréal, a maior empresa de cosméticos do mundo.[11]

A empresa foi formada em 1905 pela fusão da Anglo-Swiss Milk Company, fundada em 1866 pelos irmãos George Page e Charles Page, e Henri Nestlé (nascido Heinrich Nestlé). A empresa cresceu significativamente durante a Primeira Guerra Mundial e novamente após a Segunda Guerra Mundial, expandindo suas ofertas além de seus primeiros produtos de leite condensado e fórmula infantil. A empresa fez várias aquisições corporativas, incluindo a Crosse & Blackwell, em 1950, Findus, em 1963, Libby, em 1971, Rowntrees, em 1988, e Gerber, em 2007.

No Brasil atua desde 1876, inicialmente com a comercialização da Farinha Láctea importada.[12] Consolidou-se no país em 1921, com a instalação de sua primeira fábrica, em Araras (São Paulo), para a produção do leite condensado Milkmaid, que mais tarde receberia o nome Leite Moça.</Text>
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
