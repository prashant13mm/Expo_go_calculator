import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './calculator';

export default function App() {
  return (
  <>
  {/* <Stack.Screen options={{title:'Calculator'}}/> */}
  <Calculator/>
  </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffffff',
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
// });
