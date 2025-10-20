import { Text, View, StyleSheet, Image } from 'react-native';

export default function OonaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Oona</Text>
      <Text style={styles.text}>Hello! I am Oona Nykänen from PTIVIS23O and here is my favourite emoji:</Text>
      <Image
        source={require("../../assets/images/emoji3.png")}
        style={styles.emoji}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',    
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',     
  },
  emoji: {
    width: 30,
    height: 30,
    marginTop: 10,          
  },
});