import React from 'react'
import { Text, View, ToastAndroid } from 'react-native'
import IconCombo from './IconCombo'
import ImageContainer from './ImageContainer'
import {Icon} from 'react-native-elements'
import styled from 'styled-components/native'

export default function Card(props) {

    const {imageUrl, rating, name, location, bedrooms, bathrooms, surface, pricing, } = props //Destructuring

    const showToast = () => {
        ToastAndroid.show("Added to favorites", ToastAndroid.SHORT)
    }

    return (
        <StyledView>
            <ImageContainer imageUrl={imageUrl} rating={rating}/>
            <Text>{name}</Text>
            <IconCombo icon={"location-outline"} data={location} color={"red"} size={"large"}/>

            
            <IconCombo icon={"bed-outline"} data={bedrooms} color={"red"} type={"font-awesome"}/>
            <IconCombo icon={"star"} data={bathrooms} color={"yellow"} type={"font-awesome"}/>
            <IconCombo icon={"resize-outline"} data={surface} color={"blue"}/>

            <Text>${pricing}/m</Text>
            
            <Icon reverse name="heart" type="font-awesome" color="orange" size={15} onPress={showToast} />
        </StyledView>
    )
}

const StyledView = styled.View`
    background-color: grey;
`
