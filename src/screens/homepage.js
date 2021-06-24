import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Header, Card } from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";
import { SearchBar } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Noodles from '../../assets/noodles.jpg';
import { Avatar, Badge, withBadge } from 'react-native-elements';
import Cards from '../components/cards';
import FoodGrid from '../components/foodgrid';
import Buttons from '../components/buttons';




const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const HomePage = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', flex: 1, }}>
            <View style={{ flexDirection: 'column' }}>
                <Header
                    backgroundColor="white"
                    leftComponent={<TouchableOpacity><Icon name="pin"
                        size={18}
                        color={'red'}

                    ></Icon></TouchableOpacity>}
                    centerComponent={<Input
                        containerStyle={{ height: 15, }}
                        placeholder='Mangalore, Karnataka'
                    />}
                    rightComponent={<TouchableOpacity><Icon name="cafe"
                        size={18}
                        color={'brown'}

                    ></Icon></TouchableOpacity>}
                />
                <SearchBar lightTheme={true} platform="ios" round="true" inputContainerStyle={{}} placeholder="Search For Restaurents" containerStyle={{ backgroundColor: 'white', borderRadius: 10, }} />

            </View>


            <ScrollView >

                <View>
                    <ScrollView horizontal={true} flexDirection='row' showsHorizontalScrollIndicator={false}>
                  
                       <Buttons name="Rating 4+"/>
                       <Buttons name="Cuisnies"/>
                        <Buttons name="Pro"/>

                        <Buttons name="MAX Safety"/>
                        <Buttons name="Quick"/>
                    </ScrollView>


                </View>
                <View flexDirection="row" justifyContent="center">

                    <Card containerStyle={{ width: width / 2.5, height: height / 6.5, padding: 0, }}>
                        <Card.Image resizeMode="cover" style={{ width: width / 2.5, height: height / 6, borderRadius: 7, }} source={require('../../assets/noodles.jpg')}></Card.Image>

                    </Card>

                    <Card containerStyle={{ width: width / 2.5, height: height / 6.5, padding: 0, }}>
                        <Card.Image resizeMode="cover" style={{ width: width / 2.5, height: height / 6, borderRadius: 7, }} source={require('../../assets/noodles.jpg')}></Card.Image>

                    </Card>

                </View>

                <View style={{ marginTop: 20, padding: 3, paddingLeft: 20, paddingTop: 15 }}>
                    <Text style={{ padding: 10, fontSize: 18, fontWeight: '700' }}>Order Again</Text>

                    <View style={{ flexDirection: 'row', alignContent: "center", marginTop: 6, marginLeft: 8 }}>

                        <Image style={{ width: width / 5, height: height / 10, borderRadius: 7, marginRight: 8, marginTop: 7 }} source={Noodles} />
                        <View style={{ flexDirection: 'column', marginTop: 7, }}>
                            <Text style={{ fontSize: 15 }}>Ideal Cafe</Text>
                            <Text style={{ fontSize: 13, color: 'gray' }}>51 Mins</Text>
                            <Text style={{ fontSize: 13, color: 'blue' }}>50% off upto rs 100</Text>
                        </View>

                    </View>







                </View>

                <View style={{ justifyContent: 'center', alignContent: 'space-around', marginTop: 20 }}>
                    <Text style={{ marginLeft: 25, marginBottom: 10, fontSize: 20 }}>Food You Love</Text>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>

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
                    <View style={{ flexDirection: 'row', flex: 1 }} >
                        <View style={{ flex: 1 / 4, alignItems: 'center' }}>
                            <Image style={{ width: width / 5, height: height / 10, borderRadius: 100, marginRight: 8, marginTop: 7 }} source={Noodles} />
                            <Text>South Indian</Text>
                        </View>
                        <View style={{ flex: 1 / 4, alignItems: 'center' }}>
                            <Image style={{ width: width / 5, height: height / 10, borderRadius: 100, marginRight: 8, marginTop: 7 }} source={Noodles} />
                            <Text>North Indian</Text>
                        </View>
                        <View style={{ flex: 1 / 4, alignItems: 'center' }}>
                            <Image style={{ width: width / 5, height: height / 10, borderRadius: 100, marginRight: 8, marginTop: 7 }} source={Noodles} />
                            <Text>Italian</Text>
                        </View>
                        <View style={{ flex: 1 / 4, alignItems: 'center' }}>
                            <Image style={{ width: width / 5, height: height / 10, borderRadius: 100, marginRight: 8, marginTop: 7 }} source={Noodles} />
                            <Text>Mexican</Text>
                        </View>
                    </View>


                    



                </View>



                <View style={{ paddingTop: 20, fontWeight: "700" }}>

                    <Text style={{ marginLeft: 28, fontSize: 20 }}>235 Restuarents Around You</Text>

                    <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', paddingTop: 8 }}>


                        <View style={{ flexDirection: 'column', paddingTop: 10 }}>


                            <Cards badgetext="50 OFF+ Free Delivery" shopname="New Burger Shop" descp="Fries, Snacks And Fast Food" price="100" safety="Follows All Safety Measures to ensure food is safe" />

                            <Cards badgetext="25% OFF+ Free Delivery" shopname="Pizza Shop" descp="Pizza and burger best in town" price="200" safety="Sanitized Properly" />


                            <Cards badgetext="50 OFF+ Free Delivery" shopname="New Pasta" descp="Fries, Snacks And Fast Food" price="500" safety="Follows All Safety Measures to ensure food is safe" />




                        </View>

                    </View>

                </View>







            </ScrollView>


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

export default HomePage