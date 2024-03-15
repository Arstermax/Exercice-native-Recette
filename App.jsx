import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomePages from './src/view/HomePages';
import CategoriesSelect from './src/view/CategoriesSelect';
import DetailsRecipe from './src/view/DetailsRecipe';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='AllCategories' component={HomePages} />
                <Stack.Screen name='MealsOverview' component={CategoriesSelect} />
                <Stack.Screen name='About the Meal' component={DetailsRecipe} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})