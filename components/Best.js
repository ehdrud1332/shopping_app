import React from 'react';
import {ImageBackground, Text,} from 'react-native';

const Best = ({src, title, option}) => {
    return (
        <ImageBackground
            source={src}
            style={{
                height: 130,
                width: 230,
                marginRight: 20,
                borderRadius: 10,
                marginBottom: 40,
                opacity: 0.7,
                backgroundColor: '#fff',
                marginLeft: 3,
                padding: 12,
                marginTop: 20
            }}
        >
            <Text style={{
                fontWeight: '600',
                color: '#000000',
                fontSize: 15
            }}>
                {title}
            </Text>
            <Text style={{
                fontWeight: '600',
                color: '#000000',
                fontSize: 12
            }}>
                {option}
            </Text>
        </ImageBackground>
    );
};

export default Best;
