import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: 'My Todo App', 
        headerShown: true,
        headerTitleStyle: {
          color: '#60a5fa', 
        },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
