import React from 'react'
import { View, Text } from 'react-native'
import {Icon} from 'react-native-elements'
import styled from 'styled-components/native'

export default function IconCombo(props) {

    const {icon,color, data, iconType} = props

    return (
        <View>
            <Icon name={icon} type={iconType} color={color} />
            <Text>{data}</Text>
        </View>
    )    
}

IconCombo.defaultProps = {
    iconType: "ionicon",
}

const StyledView = styled.View`
    background-color: grey;
`
