import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { store } from './src/store/store';

import Inicio from './src/pages/Inicio'
import PaginaHome from './src/pages/paginaHome'
import PaginaJogo from './src/pages/paginaJogo'
import PaginaRanking from './src/pages/paginaRanking'
import PaginaFimDeJogo from './src/pages/paginaFimDeJogo'
import PaginaDerrota from './src/pages/paginaDerrota'
import PaginaLogin from './src/pages/paginaLogin'
import PaginaCadastro from './src/pages/paginaCadastro'
import PaginaEsqueceuASenha from './src/pages/paginaEsqueceuASenha'
import PaginaPerfil from './src/pages/paginaPerfil';
import login from "./src/reducers/login"


console.log(typeof login);
const Stack = createStackNavigator()
const store = createStore(login)

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false, transitionSpec: { open: config, close: config  }}} >
          <Stack.Screen name="Inicio" component={Inicio}  />
          <Stack.Screen name="PaginaLogin" component={PaginaLogin} />
          <Stack.Screen name="PaginaCadastro" component={PaginaCadastro} />
          <Stack.Screen name="PaginaEsqueceuASenha" component={PaginaEsqueceuASenha} />
          <Stack.Screen name="PaginaHome" component={PaginaHome} />
          <Stack.Screen name="PaginaPerfil" component={PaginaPerfil} />
          <Stack.Screen name="PaginaJogo" component={PaginaJogo} />
          <Stack.Screen name="PaginaRanking" component={PaginaRanking} />
          <Stack.Screen name="Parou" component={PaginaFimDeJogo} />
          <Stack.Screen name="Derrota" component={PaginaDerrota} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 300,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
export default App