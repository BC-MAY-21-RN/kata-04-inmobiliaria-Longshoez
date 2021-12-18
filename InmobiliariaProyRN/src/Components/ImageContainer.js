import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements'

export default function ImageContainer(props) {        

    const {ratingImage, ratingContainer, icon, ratingText, imgContainer } = styles;
    const {rating , image } = props;

    return (
        <View style={imgContainer}>            
            <Image source={{uri: image}} style={ratingImage}/>    
            {console.log(image)}    
            <View style={ratingContainer}>
                <Icon name='star' type={"font-awesome"} color='orange' size={12} style={icon}/>
                <Text style={ratingText}>{rating}</Text>
            </View>
        </View>        
    )
}
const styles = StyleSheet.create({
    imgContainer:{        
        width: 115,
        height: 115,
        justifyContent: 'center',
        alignItems: 'center',                
    },
    ratingContainer:{                
        position: 'absolute',
        bottom: 5,        
        display: 'flex',    
        flexDirection: 'row',                
        backgroundColor: '#fbedb7',
        borderRadius: 10,
        padding: 4,        
        zIndex: 2,
        justifyContent: 'center',
    },
    ratingText:{
        marginRight: 5,
        alignSelf: 'flex-start',
        color: '#7A6229',        
    },
    icon:{
        marginRight: 3,
        marginTop: 2.5,
        marginBottom: 1,
        marginLeft: 2,
        width: 12,
    },
    ratingImage:{
        zIndex: 10,
        borderRadius: 10,
        width: '100%',
        height: '100%',
    }
})