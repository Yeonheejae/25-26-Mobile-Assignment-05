import { Pressable, StyleSheet, Text, View } from 'react-native';
import Button from './Componets/Button';
import { useState } from 'react';

export default function App() {

  let [result, setResult] = useState(0);

  const add = (num) => {
    return setResult(result + num)
  }

  const minus = (num) => {
    return setResult(result - num)
  }

  const division = (num)=>{
    return setResult(result / 2)
  }



  const multiply = (num) =>{
      return setResult(result * 2)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text2}>{result}</Text>
      <View style={styles.buttonContainer}>
        {/* <Pressable style = {styles.button} onPress={() => {setResult(result+1)}}>
          <Text style = {styles.text}>+</Text>
        </Pressable>
        <Pressable style = {styles.button} onPress={() => {setResult(result-1)}}>
          <Text style = {styles.text}>-</Text>
        </Pressable>
        <Pressable style = {styles.button} onPress={() => setResult(result*2)}>
          <Text style = {styles.text}>×2</Text>
        </Pressable>
        <Pressable style = {styles.button} onPress={() => setResult(result/2)}>
          <Text style = {styles.text}>÷2</Text>
        </Pressable> */}
        <Button title="+" onClick={add}></Button>
        <Button title="-" onClick={minus}></Button>
        <Button title="÷2" onClick={division}></Button>
        <Button title="×2" onClick={multiply}></Button>
      </View> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text2: {
    fontSize: 30,
    fontWeight:'700',
    color: 'black',
    margin: '10',
  },

  button: {
    flex: '2 2',
    backgroundColor: 'orange',
    width:'80',
    height: '80',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10',
    },

  buttonContainer: {
    display:'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: 200,
  }

});
