import { useFonts } from 'expo-font';
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function LoginScreen({navigation}) {
  const [fontsLoaded, error] = useFonts({
    'BleedingCowboys': require('../../assets/fonts/Bleeding-Cowboys.ttf'),
    'MetalLord': require('../../assets/fonts/Metal-Lord.otf'),
    'Roboto': require('../../assets/fonts/Roboto.ttf'),
  });

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  const dadosUsers = [
    {
      nome:"Mateus Sousa da Mota",
      idade:19,
      user:"Maath",
      password:"teste",
      foto:"https://uploads.tenhomaisdiscosqueamigos.com/2024/11/HiCEuawZ-linkin-park-luca-valerio-tmdqa-03.webp",
    }
  ]

  const login = (user, password) => {
    const userFound = dadosUsers.find((u) => u.user === user && u.password === password);
    if (userFound) {
      navigation.navigate('Home', { nome: userFound.nome, foto: userFound.foto, user:userFound.user });
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VOIDRIFFS</Text>
      <Text style={styles.logoSubtitle}>O CATÁLOGO DO METAL</Text>
      <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="Usuario"
            placeholderTextColor="#666"
            onChangeText={(text) => setUser(text)}
            value={user}
            />
            <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#666"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
            />
            <TouchableOpacity style={styles.button}
             onPress={() => login(user, password)}
            >
            <Text style={{color: '#FFFFFF'}}>Entrar</Text>
            </TouchableOpacity>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  title: {
    fontFamily: 'BleedingCowboys',
    fontSize: 48,
    color: '#FF0000',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 2,
    margin:20,
  },
  logoSubtitle: {
    color: '#AAAAAA',
    fontSize: 14,
    letterSpacing: 5,
  },
  input: {
    backgroundColor: '#1E1E1E', 
    color: '#FFFFFF',             
    borderColor: '#8A2BE2',
    borderWidth: 1,
    borderRadius: 8,
    width: '80%',
    padding: 10,
    fontSize: 16,  
    marginBottom: 20,
    borderBottomColor: '#FF0000',
    borderBottomWidth: 2,
    fontFamily: 'Inter',
  },
    button: {
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
        margin:20
    },
});