import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Icon} from 'react-native-elements'

export default function IconCombo(props) {

    const {icon,color, data, iconType, large} = props

    return (
        <View style={large ? (styles.largeIconCombo) : (styles.iconCombo)}>
            <Icon style={styles.icon} name={icon} type={iconType} color={color} />
            <Text style={large ? (styles.largeIconComboText) : (styles.iconComboText)}>{data}</Text>
        </View>
    )    
}

IconCombo.defaultProps = {
    iconType: "ionicon",
}

const styles = StyleSheet.create({
    largeIconCombo:{
        width: '100%',

        alignItems: 'center',
        display: 'flex',                
        flexDirection: 'row',     
                        
        alignItems: 'center',
    },
    largeIconComboText:{
        color: 'grey', 
        width: '100%',
        justifyContent: 'center',        
    },
    iconCombo:{
        display: 'flex',                
        flexDirection: 'row',      
        width: 65,        
    },
    icon:{
        display: 'flex',
        width: 40,        
    },
    iconComboText:{
        color: 'black',
        fontWeight: '500',        
        alignSelf: 'center',
    }
});