import React, {useState} from 'react';
import { FlatList, StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
// import Sandbox from './components/sandbox';

/*
create by daniel pinnington 01/02/2021
*/

export default function App() {

  //to interact with the state object your function must be inside of here 


  const [todos, setTodos] = useState([
    {text: 'buy coffees' , key: '1'},
    {text: 'create an app' , key:'2'},
    {text: 'play on the xbox' , key:'3'}    
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text: text , key: Math.random().toString() },
          ...prevTodos
        ];
      })
    } else {
        Alert.alert('Oops' , 'Todos must be over 3 characters long' , [
          {text: 'understood' , onPress: () => console.log('alert closed')}
        ])
    }

  }

  return (
    // <Sandbox />
  <TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss();
    console.log('dismissed keyboard')
  }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/> 
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
    //backgroundColor: 'pink',
    flex: 1,
  },
  list: {
    marginTop: 20,
    marginBottom: 10,
    flex: 1,
  //  backgroundColor: 'yellow',
  }
});
