import {Dimensions, StyleSheet} from 'react-native';
const colorx = '#ff9b31';
const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303e45',
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  todoText: {
    color: colorx,
    fontSize: 25,
    fontWeight: 'bold',
  },
  todoCount: {
    color: colorx,
    fontSize: 25,
    fontWeight: 'bold',
  },
  emptyComponent: {
    backgroundColor: '#a7b6bd',
    padding: 8,
    margin: 5,
    borderRadius: 7,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

const todo_input = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#a7b6bd',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  container: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: '#4a636e',
    padding: 10,
    margin: 10,
    width: Dimensions.get('window').width / 2.5,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const todo_card = StyleSheet.create({
  container: {
    backgroundColor: '#a7b6bd',
    padding: 8,
    margin: 5,
    borderRadius: 7,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export {main, todo_input, todo_card};
