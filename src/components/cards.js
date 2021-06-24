import { StatusBar } from 'expo-status-bar';
import {Dimensions, Image } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { Avatar, Badge, withBadge } from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Cards = ({ badgetext, shopname, descp, price, safety }) => {
    return (
        <View>

            <Card containerStyle={{ padding: 0, margin: 4, height: height / 2.4, width: width / 1.2, borderRadius: 28 }}>


                <Card.Image containerStyle={{ borderRadius: 15 }}>
                    <Image resizeMode="cover" style={{ flex: 1, height: height / 4, width: width / 1.2, borderRadius: 20 }} source={require('../../assets/noodles.jpg')}></Image>
                    <Badge containerStyle={{ position: "absolute", paddingTop: 120 }} value={<Text style={{ color: "white" }}> {badgetext} </Text>} />
                </Card.Image>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: "600", margin: 5 }}> {shopname}</Text>
                    <Badge badgeStyle={{ height: 20, width: 50 }} status="success" value={<Text style={{ color: "white" }}>3.5 <Icon name="star" color="white"
                        size={18}

                    ></Icon> </Text>} />
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 8 }}>
                    <Text style={{ fontWeight: "500", marginLeft: 5, fontSize: 12, color: 'gray' }}>{descp}</Text><Text>Rs {price}</Text>
                </View>

                <Card.Divider />

                <Text style={{ justifyContent: 'center', alignItems: "center" }}> <Icon name="checkmark-done" color="green"
                    size={18}

                ></Icon> {safety}</Text>

            </Card>
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


export default Cards