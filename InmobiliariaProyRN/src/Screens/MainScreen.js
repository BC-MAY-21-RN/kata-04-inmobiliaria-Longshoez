import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import Card from '../Components/Card'
import data from '../helpers/Listings.json'


export default class MainScreen extends Component {    

    render() {
        return (
            <SafeAreaView style={styles.Main}>
                <ScrollView>                    
                    {
                        data?.map((data, i) => {
                            return <Card 
                                        key={i} 
                                        imageUrl={data.image}
                                        rating={data.rating}
                                        name={data.name}
                                        location={data.location}
                                        bedrooms={data.rooms}
                                        bathrooms={data.bathrooms}
                                        surface={data.surface}
                                        pricing={data.price}
                                        favorite={data.favorite}
                                    />
                        })
                    }                                                      
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    Main:{
        backgroundColor: 'white',
        height: '100%',
    },
});