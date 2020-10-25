import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Couches from "../components/Couches";
import New from "../components/New";
import Best from "../components/Best";


const Home = ({navigation}) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                backgroundColor: '#fff',
                paddingHorizontal: 20
            }}
        >
            <View style={{
                flexDirection: 'row',
                width: '100%',
                marginTop: 60,
                alignItems: 'center'
            }}>
                <View style={{
                    width: '50%'
                }}>
                    <Text style={{
                        fontWeight: '800',
                        fontSize: 22
                    }}>
                        Furniture
                    </Text>
                </View>
                <View style={{
                    width: '50%',
                    alignItems: 'flex-end'
                }}>
                    <Image
                        source={require('../assets/images/bag-2.png')}
                        style={{width:16, height: 20}}
                    />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                marginVertical: 30,
                marginTop: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    elevation: 2,
                    width: '85%',
                    backgroundColor: '#ffffff',
                    paddingHorizontal: 20,
                    height: 35,
                    borderRadius: 10,
                    marginLeft: 1
                }}>
                    <Ionicons
                        name='ios-search'
                        size={22}
                        color='#4f4a4a'
                    />
                    <TextInput
                        placeholder="Search unique furiture..."
                        style={{
                            fontWeight: "500",
                            paddingHorizontal: 10,
                            fontSize: 12
                        }}
                    />
                </View>

                <View style={{
                    alignItems: 'center',
                    elevation: 2,
                    width: '15%',
                    backgroundColor: '#fff',
                    marginLeft: 1,
                    height: 35,
                    borderRadius: 18,
                    justifyContent: 'center'
                }}>
                    <Image
                        source={require('../assets/images/sort.png')}
                        style={{
                            width: 18, height: 25
                        }}
                    />
                </View>

            </View>

            <View style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center'
            }}>
               <Text style={{
                   fontWeight: '800',
                   fontSize: 18,
                   color: '#4f4a4a'
               }}>
                   Modern
               </Text>
                <View style={{
                    width: 5,
                    height: 5,
                    borderRadius: 5,
                    marginHorizontal: 5,
                    backgroundColor: '#4f4a4a'
                }}/>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 9,
                        color: '#4f4a4a'
                    }}>
                        Good Quality items
                    </Text>
            </View>

            <ScrollView
                style={{
                    marginTop: -20
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <Couches
                    src={require('../assets/images/1.png')}
                    name="Beautiful Couches"
                    price="324.69"
                    desc="Full sleeves short dress with three attractive colors and and available in various sizes."
                    onPress={() => navigation.navigate('Detail')}
                />
                <Couches
                    src={require('../assets/images/2.png')}
                    name="Beautiful Couches"
                    price="522.32"
                    desc="Full sleeves short dress with three attractive colors and and available in various sizes."
                    onPress={() => navigation.navigate('Detail')}
                />
                <Couches
                    src={require('../assets/images/1.png')}
                    name="Beautiful Couches"
                    price="90.69"
                    desc="Full sleeves short dress with three attractive colors and and available in various sizes."
                    onPress={() => navigation.navigate('Detail')}
                />
            </ScrollView>

            <View style={{
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center'
            }}>
                <Text style={{
                    fontWeight: '800',
                    color: '#4f4a4a',
                    fontSize: 20
                }}>
                    New Arrivals
                </Text>
                <View style={{
                    height: 5,
                    width: 5,
                    borderRadius: 5,
                    backgroundColor: '#4f4a4a',
                    marginHorizontal: 4
                }}/>
                <Text style={{
                    fontWeight: '600',
                    fontSize: 10,
                    color: "#4f4a4a"
                }}>
                    Good Quailty items
                </Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <New
                    src={require('../assets/images/sofa.png')}
                    desc="Slakal sleeves short dress with three attractive colors"
                    price="454.69"
                />
                <New
                    src={require('../assets/images/lr.png')}
                    desc="Slakal sleeves short dress with three attractive colors"
                    price="233.69"
                />
                <New
                    src={require('../assets/images/lr.png')}
                    desc="Slakal sleeves short dress with three attractive colors"
                    price="233.69"
                />
            </ScrollView>

            <Text style={{
                marginTop: 20,
                color: '#4f4a4a',
                fontSize: 18,
                fontWeight: '800'
            }}>
                Best Sellers
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <Best
                    src={require('../assets/images/sofa.png')}
                    title="Zara Furniture World"
                    option="Get 35% OFF"
                />
                <Best
                    src={require('../assets/images/rm.png')}
                    title="IKEA Furniture World"
                    option="Get 15% OFF"
                />
                <Best
                    src={require('../assets/images/sofa.png')}
                    title="JAEMIN Furniture World"
                    option="Get 35% OFF"
                />

            </ScrollView>
        </ScrollView>

    );
};

export default Home;

const styles = StyleSheet.create({
    myStarStyle: {

    },
    myEmptyStarStyle: {

    }
});
