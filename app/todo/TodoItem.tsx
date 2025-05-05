import React, { memo } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface Todo {
  id: number;
  text: string;
  done: boolean;
  createdAt: Date;
}

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const _TodoItem = ({ todo, onToggle, onDelete }: Props) => {
  
  const timeString = todo.createdAt.toLocaleString(); 

  return (
    <View style={styles.todoItem}>
      <Pressable
        onPress={() => onToggle(todo.id)}
        style={[
          styles.checkbox,
          todo.done && styles.checkboxChecked,
        ]}
      />
      <View style={styles.textBlock}>
        <Text style={[styles.todoText, todo.done && styles.todoTextDone]}>
          {todo.text}
        </Text>
        <Text style={styles.timestamp}>{timeString}</Text>
      </View>
      <Pressable onPress={() => onDelete(todo.id)}>
        <Text style={styles.delete}>❌</Text>
      </Pressable>
    </View>
  );
};

export const TodoItem = memo(_TodoItem);

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 12,
  },
  checkbox: {
    width: 20, height: 20, borderRadius: 10,
    borderWidth: 2, borderColor: '#999',
  },
  checkboxChecked: {
    backgroundColor: 'green', borderColor: 'green',
  },
  textBlock: {
    flex: 1,
  },
  todoText: {
    fontSize: 16,
  },
  todoTextDone: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  delete: {
    fontSize: 18,
  },
});
