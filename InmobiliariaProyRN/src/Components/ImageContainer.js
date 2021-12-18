import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements'
import styled from 'styled-components/native'

export default function ImageContainer(props) {        

    const {ratingImage, ratingContainer, icon, ratingText, imgContainer } = styles;
    const {rating , image } = props;

    return (
        <View style={imgContainer}>
            <Image style={ratingImage} source={{uri: image}}></Image>
            <View style={ratingContainer}>
                <Icon name='star' type={"font-awesome"} color='orange' size={12} style={icon}/>
                <Text style={ratingText}>{rating}</Text>
            </View>
        </View>        
    )

     /*
        imageCont
            Image->image
            ratingComp
                star-icon
                Text->Rating 
    */
}
const styles = StyleSheet.create({
    imgContainer:{        
        borderWidth: 1,
        borderColor: 'red',
        width: 115,
        height: 115,
        justifyContent: 'center',
        alignItems: 'center',        
        borderRadius: 10,        
    },
    ratingContainer:{                
        position: 'absolute',
        bottom: 5,        
        display: 'flex',    
        flexDirection: 'row',                
        backgroundColor: '#fbedb7',
        borderRadius: 8,
        padding: 4,        
        zIndex: 2,
        justifyContent: 'center',
    },
    ratingText:{
        marginRight: 5,
        alignSelf: 'flex-start',
        color: 'red',
        
    },
    icon:{
        marginRight: 3,
        marginTop: 2.5,
        marginBottom: 1,
        marginLeft: 2,
        width: 12,
    },
    ratingImage:{
        zIndex: 1,
    }
})