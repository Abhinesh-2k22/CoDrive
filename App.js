import { StatusBar } from 'expo-status-bar';
import { Text, View ,SafeAreaView} from 'react-native';
import { Provider } from 'react-redux'
import { store } from './store';
import LoginPage from './screens/LoginPage';


export default function App() {
  return (
    <Provider store={store}>
      <View>
        <LoginPage/>
      </View>
    </Provider>
  );
}


