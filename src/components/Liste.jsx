import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Liste({title, data}) {
    return (
        <>
            <Text style={styles.Text}>{title}</Text>
            <FlatList  data={data} renderItem={({ item }) => <Text style={styles.FlatList}>{item}</Text>} />
        </>
    )
}

const styles = StyleSheet.create({
    Text : {
        textAlign : "center",
        fontSize : 25,
        marginLeft : 10,
        color : "orange",
        marginRight : 10,
        padding : 10,
        borderBottomWidth : 3,
        borderColor : "orange",
        marginBottom : 10
    },
    FlatList : {
        textAlign : "center",
        backgroundColor : "orange",
        color : "black",
        margin : 3,
        marginRight : 10,
        marginLeft : 10,
        borderRadius : 3,
        padding : 5,
        fontSize : 20
    }
})