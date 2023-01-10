import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

// const adUnitId = __DEV__
//   ? TestIds.BANNER
//   : 'ca-app-pub-5476728499097624/2898731743';

const BannerAdd = ({unitId}) => {
  return (
    <View style={{position: 'absolute', bottom: 0, alignSelf: 'center', marginBottom: 0, margin: 0}}>
      <BannerAd
        size={BannerAdSize.BANNER}
        unitId={'ca-app-pub-5476728499097624/2898731743'}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => {
          console.log('Advert loaded');
        }}
        onAdFailedToLoad={result => {
          console.log('result', result);
          console.log('Ad failed to load', arguments);
        }}
      />
    </View>
  );
};

export default BannerAdd;

const styles = StyleSheet.create({});
