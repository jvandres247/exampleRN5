import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Home(props) {
    const {navigation} = props;
    return (
        <View>
            <Text>Este es el home</Text>

            <Button title="About" onPress={() => navigation.navigate("about")}/>
            <Button title="Contact" onPress={() => navigation.navigate("contact")}/>
        </View>
    )
}

const styles = StyleSheet.create({})
