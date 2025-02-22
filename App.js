import Login from './screens/login';
import SignUp from './screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import Learn from './screens/Learn';
import Favorites from './screens/Favorites';
import LearnedWords from './screens/LearnedWords';
import UnknownWords from './screens/UnknownWords';
import AdminMenu from './screens/AdminMenu';
import AddWord from './screens/AddWord';
const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-Medium' : require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular' : require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold' : require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold' : require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}} />
        <Stack.Screen 
          name='Learn' 
          component={Learn}
          options={{ headerShown: false,
            title: '',
            
            headerStyle: {
              backgroundColor: '#FFF9EF', // Üst çubuk arka plan rengi
              width: 100,
            },
            headerTintColor: '#D39E00', // Başlık (title) ve geri tuşu rengi
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Montserrat-ExtraBold'
            },
          }}
          
        />
        <Stack.Screen 
        name='Favorites'
        component={Favorites}
        options={{ 
          title: 'Favori Kelimelerim',

          headerStyle: {
            backgroundColor: '#FFEDB7', // Üst çubuk arka plan rengi
            width: 100,

          },
          headerTintColor: '#D39E00', // Başlık (title) ve geri tuşu rengi
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold', 
            fontSize: 26,

          },
        }}
        />
        <Stack.Screen 
        name='UnknownWords' 
        component={UnknownWords}
        options={{ 
          title: 'Bilmediğim Kelimeler', 
          headerStyle: {
            backgroundColor: '#FFEDB7', // Üst çubuk arka plan rengi
            width: 100,

          },
          headerTintColor: '#D39E00', // Başlık (title) ve geri tuşu rengi
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold', 
            fontSize: 26,

          },
        }}
        />
        <Stack.Screen 
        name='LearnedWords' 
        component={LearnedWords}
        options={{ 
          title: 'Öğrendiğim Kelimeler',
          headerStyle: {
            backgroundColor: '#FFEDB7', // Üst çubuk arka plan rengi
            width: 100,

          },
          headerTintColor: '#D39E00', // Başlık (title) ve geri tuşu rengi
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold', 
            fontSize: 26,

          },
        }}
        />
        <Stack.Screen 
        name='AdminMenu' 
        component={AdminMenu}
        options={{ title: '',
            
        headerStyle: {
          backgroundColor: '#FFEDB7', // Üst çubuk arka plan rengi
          width: 100,
        },
        headerTintColor: '#FFF9EF', // Başlık (title) ve geri tuşu rengi
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Montserrat-ExtraBold'
        }, }}
        />
        <Stack.Screen 
        name='AddWord' 
        component={AddWord}
        options={{ title: '',
            
        headerStyle: {
          backgroundColor: '#FFEDB7', // Üst çubuk arka plan rengi
          width: 100,
        },
        headerTintColor: '#FFF9EF', // Başlık (title) ve geri tuşu rengi
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Montserrat-ExtraBold'
        }, }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}