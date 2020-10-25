import React from 'react';
import {View, Image} from 'react-native';
import {ScrollView} from "react-native-gesture-handler";

const SmallPoster = ({src}) => {
    return (
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
                source={src}
                style={{height: 80, width: 80}}
            />
        </View>
    );
};

export default SmallPoster;
