import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import Navigator from "./navigation/Navigator";

const cacheImages = images =>
    images.map(image => {
        if(typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });

const cacheFonts = fonts =>
    fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)]);

const App = () => {

    const [isReady, setIsReady] = useState(false)

    const loadAssets = async() => {
        const images = cacheImages([
            "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80",
            require("./assets/splash.png")
        ]);
        console.log(images);
        const fonts = cacheFonts([Ionicons.font]);
        return Promise.all([...images, ...fonts]);
    }
    const onFinish = () => setIsReady(true);

    return isReady ? (
        <Navigator/>
    ) : (
        <AppLoading
            startAsync={loadAssets}
            onFinish={onFinish}
            onError={console.log}
        />
    )
};

export default App;
