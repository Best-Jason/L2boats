import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
// import Icon from 'react-native-vector-icons/Fonts/FontAwesome6_Solid.ttf';

const Boat = ({boat_name, description, icon_name, poster})=> {
    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                <Icon name={icon_name} size={20} color="#B23B23" />
                {boat_name}
            </Text>
            <Text>
                {description}
                </Text>
            <Image source={poster} style={{width:400, height:500}}/>
        </View>
    );
};




export default Boat;


