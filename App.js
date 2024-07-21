import { StatusBar } from 'expo-status-bar';
import { Text, View ,SafeAreaView} from 'react-native';
import { Provider } from 'react-redux'
import { store } from './store';
import LoginPage from './screens/LoginPage';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
       <View>
         <LoginPage/>
       </View>
      </SafeAreaProvider>
    </Provider>
  );
}


