import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardsDetails from '../components/CardsDetails'
import { MEALS } from '../../api/recettes'

export default function DetailsRecipe({ route, navigation }) {
    const { title } = route.params
    return (
        <SafeAreaView style={{backgroundColor : "lightgrey", minHeight : 1000}}>

            <FlatList style={{ marginBottom: 30 }} data={MEALS} renderItem={({ item, index, separator }) => {
                if (item.title === title) {
                    return <CardsDetails
                        id={item.id}
                        categoryIds={item.categoryIds}
                        title={item.title}
                        affordability={item.affordability}
                        complexity={item.complexity}
                        imageUrl={item.imageUrl}
                        duration={item.duration}
                        ingredients={item.ingredients}
                        steps={item.steps}
                        isGlutenFree={item.isGlutenFree}
                        isVegan={item.isVegan}
                        isVegetarian={item.isVegetarian}
                        isLactoseFree={item.isLactoseFree} />
                }
            }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})