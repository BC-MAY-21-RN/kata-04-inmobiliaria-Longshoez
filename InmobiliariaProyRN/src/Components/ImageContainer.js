import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements'
import styled from 'styled-components/native'

export default function ImageContainer(props) {        

    return (
        <ImageContainerView>                                   
            <Image style={styles.ratingImage} source={{uri: props.imgaeUrl}}></Image>
            <View style={styles.ratingContainer}>
                <Icon name='star' type={"font-awesome"} color='orange' size={12} style={styles.icon}/>
                <Text style={styles.ratingText}>{props.rating}</Text>
            </View>
        </ImageContainerView>        
    )

     /*
        imageCont
            Image->image
            ratingComp
                star-icon
                Text->Rating 
    */
}

const ImageContainerView = styled.View`    
    background-color: white;        

`
const styles = StyleSheet.create({
    ratingContainer:{        
        display: 'flex',        
        flexDirection: 'row',        
        backgroundColor: '#fbedb7',
        borderRadius: 8,
        padding: 4,

        zIndex: 2,

    },
    ratingText:{
        paddingRight: 8,
        color: 'black',
        
    },
    icon:{
        width: 20,
    },
    ratingImage:{
        zIndex: 1,
    }
})