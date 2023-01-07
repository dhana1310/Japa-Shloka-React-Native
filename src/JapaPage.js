import {useEffect, useState} from 'react';
import {StyleSheet, Vibration, View} from 'react-native';
import {Avatar, Badge, IconButton, Surface, Text} from 'react-native-paper';
// import {
//   AppOpenAd,
//   TestIds,
//   AdEventType,
//   BannerAd,
//   BannerAdSize,
// } from 'react-native-google-mobile-ads';

import {getData, storeData} from './LocalAsyncStorage';
import Sound from 'react-native-sound';
import {AudioAssets} from '../assets/Assets';
import BannerAdd from './BannerAdd';

Sound.setCategory('Playback');

const JapaPage = () => {
  var beepAudio = new Sound(AudioAssets.beep, Sound.MAIN_BUNDLE, error => {});
  var audio = new Sound(AudioAssets.conchShell, Sound.MAIN_BUNDLE, error => {});
  const oneNotEight = 5;
  const [permanent108Count, setPermanent108Count] = useState(0);
  const [permanentRounds, setPermanentRounds] = useState(0);

  const [temporary108Count, setTemporary108Count] = useState(0);
  const [temporaryRounds, setTemporaryRounds] = useState(0);
  var [volumeFlag, setVolumeFlag] = useState(false);
  var [vibrationIconFlag, setVibrationIconFlag] = useState(true);

  useEffect(() => {
    getData('@savedJapaData').then(value => populate(value));
  }, []);

  function populate(savedJapaData) {
    console.log(savedJapaData);
    if (savedJapaData) {
      setPermanent108Count(savedJapaData.permanent108Count);
      setPermanentRounds(savedJapaData.permanentRounds);
      setTemporary108Count(savedJapaData.temporary108Count);
      setTemporaryRounds(savedJapaData.temporaryRounds);
    }
  }

  const plusButtonHandle = () => {
    var dbTemporary108Count = temporary108Count;
    var dbPermanent108Count = permanent108Count;
    var dbTemporaryRounds = temporaryRounds;
    var dbPermanentRounds = permanentRounds;

    var localtemporary108Count = temporary108Count;
    if (localtemporary108Count < oneNotEight) {
      if (vibrationIconFlag) {
        Vibration.vibrate(80);
      }
      if (volumeFlag) {
        beepAudio.setVolume(1);
        beepAudio.play();
      }
      dbTemporary108Count = localtemporary108Count + 1;
      dbPermanent108Count = permanent108Count + 1;
      setTemporary108Count(dbTemporary108Count);
      setPermanent108Count(dbPermanent108Count);
    }
    if (localtemporary108Count + 1 === oneNotEight) {
      if (vibrationIconFlag) {
        Vibration.vibrate(1000);
      }
      if (volumeFlag) {
        audio.setVolume(1);
        audio.play();
      }
      dbTemporary108Count = 0;
      setTemporary108Count(dbTemporary108Count);

      dbTemporaryRounds = temporaryRounds + 1;
      dbPermanentRounds = permanentRounds + 1;
      setTemporaryRounds(dbTemporaryRounds);
      setPermanentRounds(dbPermanentRounds);
    }
    storeData(
      '@savedJapaData',
      saveJapaDateObject(
        dbPermanent108Count,
        dbPermanentRounds,
        dbTemporary108Count,
        dbTemporaryRounds,
      ),
    );
  };

  const minusButtonHandle = () => {
    if (temporary108Count > 0) {
      storeData(
        '@savedJapaData',
        saveJapaDateObject(
          permanent108Count - 1,
          permanentRounds,
          temporary108Count - 1,
          temporaryRounds,
        ),
      );
      setTemporary108Count(temporary108Count - 1);
      setPermanent108Count(permanent108Count - 1);
    }
  };

  const refreshTemporaryData = () => {
    storeData(
      '@savedJapaData',
      saveJapaDateObject(
        permanent108Count - temporary108Count,
        permanentRounds,
        0,
        0,
      ),
    );
    setPermanent108Count(permanent108Count - temporary108Count);
    setTemporary108Count(0);
    setTemporaryRounds(0);
  };

  function volumeButton() {
    setVolumeFlag(!volumeFlag);
  }

  function vibrationButton() {
    setVibrationIconFlag(!vibrationIconFlag);
  }

  const refreshPermanentData = () => {
    storeData('@savedJapaData', saveJapaDateObject(0, 0, 0, 0));
    setPermanent108Count(0);
    setPermanentRounds(0);
    setTemporary108Count(0);
    setTemporaryRounds(0);
  };

  function saveJapaDateObject(p108Count, pRounds, t108Count, tRounds) {
    return {
      permanent108Count: p108Count,
      permanentRounds: pRounds,
      temporary108Count: t108Count,
      temporaryRounds: tRounds,
    };
  }

  return (
    <View style={styles.mainView}>
      <Surface style={styles.surface} id="showFullShloka" elevation={5}>
        <View style={{flexDirection: 'row'}}>
          <Badge size={90} style={styles.refreshBadge}>
            {permanentRounds}
          </Badge>
          <IconButton
            size={60}
            style={styles.refresh}
            icon="cached"
            onPress={refreshPermanentData}>
            {/* sx={{ fontSize: 60 }} */}
          </IconButton>
          <Badge size={90} style={styles.refreshBadge}>
            {permanent108Count}
          </Badge>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Badge size={75} style={styles.refreshBadge}>
            {temporaryRounds}
          </Badge>
          <IconButton size={40} icon="cached" onPress={refreshTemporaryData}>
            {/* sx={{ fontSize: 40 }} */}
          </IconButton>
          <Badge size={75} style={styles.refreshBadge}>
            {temporary108Count}
          </Badge>
        </View>
        <IconButton
          size={100}
          icon="minus-circle"
          onPress={minusButtonHandle}
          disabled={temporary108Count === 0}>
          {/* <RemoveCircleIcon sx={{ fontSize: 100 }} color={temporary108Count === 0 ? "disabled" : "success"} /> */}
        </IconButton>
        <IconButton size={220} icon="plus-circle" onPress={plusButtonHandle}>
          {/* <AddCircleIcon sx={{ fontSize: 250 }} color="success" /> */}
        </IconButton>
        <View style={{flexDirection: 'row'}}>
          <IconButton
            size={30}
            icon="volume-high"
            iconColor={volumeFlag ? 'black' : 'grey'}
            onPress={volumeButton}>
            {/* <VolumeUpIcon color={volumeFlag ? "inherit" : "disabled"} sx={{ fontSize: 50 }} /> */}
          </IconButton>
          <IconButton
            size={30}
            icon="vibrate"
            iconColor={vibrationIconFlag ? 'black' : 'grey'}
            onPress={vibrationButton}>
            {/* <VibrationIcon sx={{ fontSize: 50 }} color={vibrationIconFlag ? "inherit" : "disabled"} /> */}
          </IconButton>
        </View>
      </Surface>
      <BannerAdd />
    </View>
  );
};

export default JapaPage;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: '85%',
    width: '95%',
    marginBottom: 80,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  refresh: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  refreshBadge: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
