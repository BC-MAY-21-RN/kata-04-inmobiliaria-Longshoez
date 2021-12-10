import React, { Component } from 'react'
import { SafeAreaView, Text, ScrollView } from 'react-native'
import data from '../helpers/Inmuebles.json'


export default class MainScreen extends Component {    

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Text>works</Text>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
