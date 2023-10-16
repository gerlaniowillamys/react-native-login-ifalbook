import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./src/Componentes/Login"
import { Cadastrar } from "./src/Componentes/CadastrarLogin"
import { TelaPrincipal } from "./src/Componentes/TelaPrincipal"
import { Post } from "./src/Componentes/Post"

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} />
                <Stack.Screen name='TelaPrincipal' component={TelaPrincipal} options={{ headerShown: false }} />
                <Stack.Screen name='Post' component={Post} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}