import React, { useState, useCallback } from 'react';
import {
  View,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import { TodoItem } from './TodoItem';

interface Todo {
  id: number;
  text: string;
  done: boolean;
  createdAt: Date;
}

export default function TodoCard() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = useCallback(() => {
    if (!todo.trim()) return;
    setTodos((t) => [
      ...t,
      {
        id: Date.now(),
        text: todo.trim(),
        done: false,
        createdAt: new Date(),
      },
    ]);
    setTodo('');
  }, [todo]);

  const toggleDone = useCallback((id: number) => {
    setTodos((t) =>
      t.map((x) => (x.id === id ? { ...x, done: !x.done } : x))
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((t) => t.filter((x) => x.id !== id));
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your todo..."
        placeholderTextColor="#999"
        value={todo}
        onChangeText={setTodo}
      />
      <Pressable
        onPress={handleAdd}
        style={({ pressed, hovered }) => [
          styles.button,
          pressed && styles.buttonPressed,
          hovered && styles.buttonHover,
        ]}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>

      <FlatList
        style={styles.flatList}
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={toggleDone}
            onDelete={deleteTodo}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 60 },
  input: {
    borderWidth: 2,
    borderColor: '#3b82f6',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#60a5fa',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonPressed: { backgroundColor: '#3b82f6' },
  buttonHover: { backgroundColor: '#7fb9ff' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  flatList: { marginTop: 20 },
});
