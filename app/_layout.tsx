import { Stack } from "expo-router";
import{ QueryClientProvider, QueryClient} from '@tanstack/react-query'

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <Stack>
      <Stack.Screen 
      options={{
        headerShown: false
      }}
      name="index" 
      />
      <Stack.Screen 
      options={{
        headerShown: false
      }}
      name="step/index" 
      />
      <Stack.Screen 
      options={{
        headerShown: false
      }}
      name="create/index" 
      />
      <Stack.Screen 
      options={{
        headerShown: false
      }}
      name="nutrition/index" 
      />
    </Stack>
    </QueryClientProvider>
    
  );
}
