import { FlatList, Image, SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Liste from './Liste'

export default function CardsDetails({ id, categoryIds, title, affordability, complexity, imageUrl, duration, ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree }) {
    return (
        <SafeAreaView>
            <Image style={{ height: 360, width: "100%" }} source={{ uri: imageUrl }} />
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.sousText}>{duration}m  {complexity.toUpperCase()}  {affordability.toUpperCase()}</Text>
            <View style={{paddingLeft : 30, paddingRight : 30}}>
            <Liste title={'Ingrédients'} data={ingredients} />
            <Liste title={'Steps'} data={steps} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    text: {
        fontWeight: "bold",
        fontSize: 20,
        padding: 10,
        color: "black",
        letterSpacing: 2,
        textAlign: "center"
    },
    sousText: {
        textAlign: "center",
        fontWeight: "bold",
        padding: 10,
        color: "black",
        letterSpacing: 2,
        textAlign: "center"
    }
})