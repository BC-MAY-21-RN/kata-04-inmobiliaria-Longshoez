import React from 'react'
import { View, Text, Image } from 'react-native'
import {Icon} from 'react-native-elements'
export default function ImageContainer(props) {        

    return (
        <View>                                   
            <Image source={{uri: props.imgaeUrl}}></Image>
            <Text>                
                <Icon name='star' type={"font-awesome"} color='orange' />
                {props.rating}
            </Text>
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
