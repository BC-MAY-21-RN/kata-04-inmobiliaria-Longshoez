import React from 'react'
import { ToastAndroid, Text, View } from 'react-native'
import IconCombo from './IconCombo'
import ImageContainer from './ImageContainer'
import {Icon} from 'react-native-elements'
//import styled from 'styled-components/native'

export default function Card(props) {

     //Destructuring
    const {imageUrl, rating, name, location, bedrooms, bathrooms, surface, pricing, } = props

    const showToast = () => {
        ToastAndroid.show("Added to favorites", ToastAndroid.SHORT)
    }

    return (
        <View>
            <View>
                <ImageContainer imageUrl={imageUrl} rating={rating}/>
            </View>
            
            <View>                 

                <Text>{name}</Text>
                <IconCombo icon={"location-outline"} data={location} color={"red"} large={true}/>
                
                <View>
                    <IconCombo icon={"bed-outline"} data={bedrooms} color={"#949494"} type={"font-awesome"}/>
                    <IconCombo icon={"star"} data={bathrooms} color={"#949494"} type={"font-awesome"}/>
                    <IconCombo icon={"resize-outline"} data={surface} color={"#949494"}/>
                </View>


                <View>
                    <Text>{"$" + pricing}/m</Text>
                    <Icon reverse name="heart" type="font-awesome" color="orange" size={15} onPress={showToast}/>
                </View>
            </View>
            
        </View>
    )
}
/*
const StyledView = styled.View`     
`

const HorComponent = styled.Text`    

`

const HorComponent2 = styled.Text`    
`

const StyledViewIconComp = styled.View`
`*/
/*
const StyledBottomView = styled.Text`    
    font-size: 22px;
    font-weight: 600;    
`*/
