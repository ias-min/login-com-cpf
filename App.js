import { useState } from 'react'
import { SafeAreaView, Image, StyleSheet, TextInput, Button, Text } from 'react-native';

export default function App() {
  const [cpf, setCpf] = useState('');
  const [cpfField, setCpfField] = useState('');
  // 

  const handleSendCpf = () => {
    setCpf(cpfField);
  };

  const handleClear = () => {
    setCpf('');
    setCpfField('');
  };

  return (
    <SafeAreaView style={styles.cpf}>
      {cpf == '' &&
        <>


      <Image style={styles.profile} source={require('./assets/perfil.png')} />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#999"
        backgroundColor= "#000000"
        borderBottomColor= '#000000'
        value={cpfField}
        onChangeText={(text) => setCpfField(text)}
      />

      <Button  title='Logar' onPress={handleSendCpf} color='#000000' />
      </>
      }
     
      {cpf == '000.000.000-00' &&
        <>
          <Image style={styles.profile} source={require('./assets/rosto.png')} />
          <Text>Você está logado com CPF: {cpf}</Text>
          <Button title={`cpf não é ${cpf}`} onPress={handleClear}/>
        </>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profile: {
    margin: '0 auto',
    marginTop: 300,
    width: 100,
    height: 100,
  },

  cpf:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15
  },

  input: {
    borderWidth: 4 ,
    borderBottomColor: '#000000',
    width: 300,
    padding: 10
  },

})