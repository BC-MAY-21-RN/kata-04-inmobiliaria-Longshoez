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
                                        imageUrl={data.imageURL}
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

                    /*
                        Card
                            imageCont
                                Image->image
                                ratingComp
                                    star-icon
                                    Text->Rating
                            Text->name
                            IconCombo.Large
                                location-icon
                                Text->location
                            View - horizontal
                                IconCombo -> bed-icon + data.bed
                                IconCombo -> bath-icon + data.bth
                                IconCombo -> squr-icon + data.sqr
                            View - horizontal
                                Text-> ${price}/m
                                lov-Icon (give functionality?)

                    */
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