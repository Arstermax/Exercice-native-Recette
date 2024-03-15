import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MEALS } from '../../api/recettes'
import Cards from '../components/Cards'

export default function CategoriesSelect({ route, navigation }) {
    const { id } = route.params
    return (
        <SafeAreaView style={{backgroundColor : "lightgrey", minHeight : 1000}}>
            <FlatList data={MEALS} renderItem={({ item, index, separator }) => {
                let exist = item.categoryIds.find((element) => element === id)

                if (exist) {
                    return <TouchableOpacity  onPress={() => navigation.navigate('About the Meal',{title : item.title})}>
                    <Cards title={item.title} affordability={item.affordability} complexity={item.complexity} imageUrl={item.imageUrl} duration={item.duration} />
                    </TouchableOpacity>
                }
            }
            } 
            keyExtractor={index}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})