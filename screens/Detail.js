import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import SwiperComponent from "../components/SwiperComponent";

const Detail = ({navigation}) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingHorizontal: 20
        }}>
            <View style={{
                flexDirection: 'row',
                width: '100%',
                marginTop: 50
            }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        width: '50%'
                    }}
                >
                    <Image
                        source={require('../assets/images/back.png')}
                        style={{
                            width: 15,
                            height: 15
                        }}
                    />
                </TouchableOpacity>
                <View style={{
                    width: '50%',
                    alignItems: 'flex-end'
                }}>
                    <Image
                        source={require('../assets/images/bag-2.png')}
                        style={{width: 16, height: 20}}
                    />
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                height: 340,
                width: '100%'
            }}>
                <View style={{
                    marginTop: 150
                }}>
                    <View style={{
                        backgroundColor: '#3f3a42',
                        height: 25,
                        width: 25,
                        borderRadius: 5,
                        borderWidth: 2,
                        borderColor: '#fff',
                        elevation: 5
                    }}/>
                    <View style={{
                        backgroundColor: '#707070',
                        height: 25,
                        width: 25,
                        borderRadius: 5,
                        borderWidth: 2,
                        borderColor: '#fff',
                        elevation: 5,
                        marginVertical: 10
                    }}/>
                    <View style={{
                        backgroundColor: '#b3b4b9',
                        height: 25,
                        width: 25,
                        borderRadius: 5,
                        borderWidth: 2,
                        borderColor: '#fff',
                        elevation: 5,
                    }}/>
                </View>

                <SwiperComponent/>
            </View>

            <View style={{
                width: '100%',
                alignItems: 'flex-end'
            }}>
                <Image
                    source={require('../assets/images/save.png')}
                    style={{
                        marginTop: -45,
                        width: 15,
                        height: 20
                    }}
                />
            </View>
            
        </View>
    );
};

export default Detail;

const styles = StyleSheet.create({
    myStarStyle: {

    },
    myEmptyStarStyle: {

    }
});
