
import { Dimensions, Image } from 'react-native';
import React from 'react';
import {View } from 'react-native';
import { Button } from 'react-native-elements';



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Buttons = ({ name, }) => {
    return (
        <View>
            <Button
                title={name}
                type="outline"
                buttonStyle={{ width: 100, height: 40, borderRadius: 10, marginLeft: 20, }}

            />

        </View>

    );
}



export default Buttons