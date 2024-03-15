import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Cards({  title, affordability, complexity, imageUrl, duration }) {
    return (
        <View style={styles.container} >
            <View style={styles.containerChildren}>
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.sousText}>{duration}m  {complexity.toUpperCase()}  {affordability.toUpperCase()}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginLeft: 50,
        marginRight: 50,
        backgroundColor : "white",
        borderRadius: 20
    },
    containerChildren: {
        borderRadius: 20,
        justifyContent: "center",
        alignContent: "center",
        shadowOffset : {
            width : 100,
            height : 100
        },
        shadowOpacity : 1,
        shadowColor : "gray"
    },
    image: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

        height: 200,
        width: "100%"
    },
    box : {

    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        padding: 10,
        color: "gray",
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