import React from 'react'
import { ToastAndroid, Text, View, StyleSheet } from 'react-native'
import IconCombo from './IconCombo'
import ImageContainer from './ImageContainer'
import {Icon} from 'react-native-elements'
//import styled from 'styled-components/native'

export default function Card(props) {

     //Destructuring
    const {imageUrl, rating, name, location, bedrooms, bathrooms, surface, price } = props
    const { cardStyle, rowImage, rowContent, iconContainer, priceAndHeart, priceTag, nameTag, locationStyle } = styles

    const showToast = () => {
        ToastAndroid.show("Added to favorites", ToastAndroid.SHORT)
    }

    return (
        <View style={cardStyle}>
            <View style={rowImage}>
                <ImageContainer image={imageUrl} rating={rating}/>
            </View>
            
            <View style={rowContent}>
                <Text style={nameTag}>{name}</Text>
                <IconCombo style={locationStyle} icon={"location-outline"} data={location} color={"red"} large={true}/>
                
                <View style={iconContainer}>
                    <IconCombo icon={"bed-outline"} data={bedrooms} color={"#949494"} type={"font-awesome"}/>
                    <IconCombo icon={"bed-outline"} data={bathrooms} color={"#949494"} type={"font-awesome"}/>
                    <IconCombo icon={"resize-outline"} data={surface} color={"#949494"}/>
                </View>

                <View style={priceAndHeart}>                    
                    <Text style={priceTag}>{price}/m</Text>
                    <Icon reverse name="heart" type="font-awesome" color="orange" size={15} onPress={showToast}/>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle:{        
        flexDirection: 'row',
        width: '90%',
        height: 115,
        margin: 20,        
    },

    rowImage:{
        paddingRight: 5,
        marginLeft: 14,
    },

    rowContent:{
        flex: 1,        
    },    
    iconContainer:{
        flexDirection: 'row',
    },
    priceAndHeart:{        
        flexDirection: 'row',               
        alignItems: 'center',        
        height: 40,
    },

    priceTag:{
        display: 'flex',                                
        marginRight: 110,
        fontWeight: '700',
        color: '#151525',
        fontSize: 22,
        paddingLeft: 10,
    },
    nameTag:{        
        width: 250,
        marginRight: 110,        
        color: '#151525',
        fontSize: 24,
        paddingLeft: 10,
    },
    locationStyle:{        
        marginRight: 110,        
        color: '#151525',
        fontSize: 24,
        paddingLeft: 10,        
    }
})

Card.defaultProps = {
    price: "300",
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
