import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../../api/recettes'


export default function HomePages({ navigation }) {
    return (
        <SafeAreaView style={{backgroundColor : "lightgrey"}}>
            <FlatList numColumns={2} flexDirection={"row"} justifyContent="center" alignItems={"center"} data={CATEGORIES} renderItem={({ item, index, separator }) =>
                <TouchableOpacity onPress={() => navigation.navigate("MealsOverview", { id: item.id })} style={[{ backgroundColor: item.color }, styles.list]} key={index}>
                    <Text style={styles.listeText } >{item.title}</Text>
                </TouchableOpacity>
            } />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    listes: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: 438
    },
    list: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        width: 150,
        borderRadius : 10,

        height: 150,
    },
    listeText: {
        fontSize: 15,
        padding: 3,
        letterSpacing: 3,
        textAlign: "center",
        fontWeight: "bold"
    }
})