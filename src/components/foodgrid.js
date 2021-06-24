import {Dimensions, Image, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Noodles from '../../assets/noodles.jpg';






const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const FoodGrid = () => {
    return (
        <View style={{ justifyContent: 'center', alignContent: 'space-around', marginTop: 20 }}>
         <Text style={{ marginLeft: 25, marginBottom: 10, fontSize: 20 }}>Food You Love</Text>

<View style={{ flex: 1 / 4, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: width / 5, height: height / 10, borderRadius: 100, marginTop: 7 }} source={Noodles} />
                            <Text>Homemade</Text>
                        </View>
                        <View style={{ flex: 1 / 4, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: width / 5, height: height / 10, borderRadius: 100, marginTop: 7 }} source={Noodles} />
                            <Text>Biriyani</Text>
                        </View>
                        <View style={{ flex: 1 / 4, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: width / 5, height: height / 10, borderRadius: 100, marginTop: 7 }} source={Noodles} />
                            <Text>Noodles</Text>
                        </View>
                        <View style={{ flex: 1 / 4, alignItems: 'center' }}>
                            <Image style={{ width: width / 5, height: height / 10, borderRadius: 100, marginRight: 8, marginTop: 7 }} source={Noodles} />
                            <Text>Pasta</Text>
                        </View>



                        <View style={{ flex: 1 / 4, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: width / 5, height: height / 10, borderRadius: 100, marginTop: 7 }} source={Noodles} />
                            <Text>Homemade</Text>
                        </View>
                        <View style={{ flex: 1 / 4, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: width / 5, height: height / 10, borderRadius: 100, marginTop: 7 }} source={Noodles} />
                            <Text>Biriyani</Text>
                        </View>
                        <View style={{ flex: 1 / 4, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: width / 5, height: height / 10, borderRadius: 100, marginTop: 7 }} source={Noodles} />
                            <Text>Noodles</Text>
                        </View>
                        <View style={{ flex: 1 / 4, alignItems: 'center' }}>
                            <Image style={{ width: width / 5, height: height / 10, borderRadius: 100, marginRight: 8, marginTop: 7 }} source={Noodles} />
                            <Text>Pasta</Text>
                        </View>



           


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default FoodGrid