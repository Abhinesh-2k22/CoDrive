import { Text, View ,SafeAreaView,ScrollView} from 'react-native';
import { Provider } from 'react-redux'
import { store } from './store';
import LoginPage from './screens/LoginPage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Signup from './screens/Signup';
import Signup2 from './screens/Signup2';
import Signup3 from './screens/Signup3';
import Pooling from './screens/Pooling';
import Profile from './screens/Profile';
import Newride from './screens/Newride';
import Newride2 from './screens/Newride2';
import Passengersearch from './screens/Passengersearch';
import Searchresult from './screens/Searchresult';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './screens/Navbar';

const Stack= createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Provider store={store}>
      <SafeAreaProvider>
      
        <Stack.Navigator initialRouteName='Login'>
  
           <Stack.Screen name="Login" component={LoginPage}/>
           <Stack.Screen name="signup1" component={Signup}/>
           <Stack.Screen name="signup2" component={Signup2}/>
           <Stack.Screen name="signup3" component={Signup3}/>
           <Stack.Screen name="pooling" component={Pooling}/>
           <Stack.Screen name="profile" component={Profile}/>
           <Stack.Screen name="newride" component={Newride}/>
           <Stack.Screen name="newride2" component={Newride2}/>
           <Stack.Screen name="passengersearch" component={Passengersearch}/>
           <Stack.Screen name="searchresult" component={Searchresult}/>
           
        
        </Stack.Navigator>
       
      </SafeAreaProvider>
    </Provider>
  </NavigationContainer>
  );
}


