import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

const Detail = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'red',
            paddingHorizontal: 20
        }}>
            <View>
                <TouchableOpacity>
                    <Image/>
                </TouchableOpacity>
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
