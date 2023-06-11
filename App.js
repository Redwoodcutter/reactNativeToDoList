import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [criptoGoals, setCriptoGoals] = useState([]);

  function goalInputHandler(enteredText) {
    console.log(enteredText);
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() { 
    console.log(enteredGoalText);
    setCriptoGoals(currentCriptoGoals => [...criptoGoals,enteredGoalText]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Kripto Goal' onChangeText={goalInputHandler} />
        <Button title='Add Kripto Goal' onPress={addGoalHandler}/>
      </View>
      <View styles={styles.goalsContainer}>
        {criptoGoals.map((goal) => <Text Key={goal}>{goal}</Text> )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '60%',
    marginRight: 8
  },
  goalsContainer: {
    flex: 5
  }
});
