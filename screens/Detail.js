import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

import SwiperComponent from "../components/SwiperComponent";
import SmallPoster from "../components/SmallPoster";

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

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                width: '100%'
            }}>
                <View style={{
                    width: '65%'
                }}>
                    <Text style={{
                        fontWeight: '800',
                        fontSize: 18,
                        color: '#4f4a4a'
                    }}>
                        Autobe Best Chair
                    </Text>
                </View>
                <View style={{
                    width: '35%'
                }}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 9,
                        color: '#4f4a4a'
                    }}>
                        Customers Rating
                    </Text>
                    <View style={{
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Stars
                            default={4}
                            count={5}
                            half={true}
                            starSize={20}
                            fullStar={<MaterialCommunityIcons name='star' style={[styles.myStarStyle]}/>}
                            emptyStar={<MaterialCommunityIcons name='star-outline' style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                            halfStar={<MaterialCommunityIcons name='star-half' style={[styles.myStarStyle]}/>}
                        />
                        <Text style={{
                            fontSize: 8,
                            fontWeight: '600',
                            marginHorizontal: 5,
                            paddingTop: 4,
                            color: '#b3aeae'
                        }}>
                            84 Reviews
                        </Text>
                    </View>
                </View>
            </View>
            <Text style={{
                fontWeight: '600',
                fontSize: 16,
                color: '#b3aeae'
            }}>
                $324,69
            </Text>
            <Text style={{
                fontWeight: '600',
                fontSize: 14,
                lineHeight: 28,
                color: '#b3aeae',
                marginTop: 20
            }}>
                Full sleeves short dress with three attractive colors and and available in various sizes.
            </Text>

            <ScrollView
                style={{margin: 30}}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f5f6fb',
                    height: 80,
                    width: 80,
                    borderRadius: 25,
                    marginRight: 20
                }}>
                    <Image
                        source={require('../assets/images/12.png')}
                        style={{height: 80, width: 80}}
                    />
                </View>
                <SmallPoster
                    src={require('../assets/images/13.png')}
                />
                <SmallPoster
                    src={require('../assets/images/14.png')}
                />
                <SmallPoster
                    src={require('../assets/images/15.png')}
                />
                <SmallPoster
                    src={require('../assets/images/12.png')}
                />
                <SmallPoster
                    src={require('../assets/images/13.png')}
                />
            </ScrollView>

            <View style={{
                backgroundColor: '#000',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '10',
                padding: 12,
                marginBottom: 40
            }}>
                <Image
                    source={require('../assets/images/bag.png')}
                    style={{height: 20, width: 16}}
                />
                <Text style={{
                    fontSize: 20,
                    color: '#fff',
                    fontWeight: '600',
                    marginHorizontal: 15
                }}>
                    Add to Cart
                </Text>
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
