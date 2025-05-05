import { View } from 'react-native';
import TodoCard from './todo/TodoCard';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-100">
      <TodoCard />

    </View>
  );
}
