import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {useEffect, useState} from 'react';
import useFetchMemorisedShlokas from './useFetchMemorisedShlokas';
import parseResponse from './ParseResponse';
import {
  shlokaList,
  createSequenceList,
  defaultCurrentSelectedDetails,
  getDefaultBookName,
  populateToast,
  errorCode,
  defaultUiState,
} from './Constants';
import ChipsArray from './ChipsArray';
// import { Button, Checkbox, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ShowToast from './ShowToast';
import {getData, storeData} from './LocalAsyncStorage';
import { Button, Checkbox } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
const AddShloka2 = () => {

  const [totalChaptersList, setTotalChaptersList] = useState([]);
  const [totalCantosList, setTotalCantosList] = useState([]);
  const [totalShlokaList, setTotalShlokaList] = useState([]);
  const [totalSelectedShlokaList, setTotalSelectedShlokaList] = useState([]);
  const [currentSelectedDetails, setCurrentSelectedDetails] = useState(
    defaultCurrentSelectedDetails,
  );
  const [ language, setLanguage ] = useState("");
  const [showToast, setShowToast] = useState(
    populateToast(
      false,
      'error',
      'Error',
      'Unable to fetch the existing shlokas!!',
      '100%',
    ),
  );

      
      

  return (
    <View>
      <View className="row mt-3">
        <View className="col-md-14 mb-3">
          <Text style={{color:"green"}}>Kya re halkat</Text>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
          <View>
            {totalShlokaList.map(shlokaNumber => (
              <View
                key={
                  `${currentSelectedDetails.onScreenCurrentChapterNumber}.` +
                  shlokaNumber
                }>
                <label
                  style={{
                    // display: "inline-block",
                    float: 'left',
                    marginLeft: '20px',
                  }}>
                  <Checkbox
                    type="checkbox"
                    // id={`${shlokaNumber}`}
                    id={`${shlokaNumber}`}
                    name="vehicle1"
                    status={totalSelectedShlokaList.includes(
                      currentSelectedDetails.onScreenCurrentBook +
                        ' ' +
                        (currentSelectedDetails.onScreenCurrentBook === 'BG'
                          ? ''
                          : currentSelectedDetails.onScreenCurrentBook === 'CC'
                          ? currentSelectedDetails.onScreenCurrentCanto + ' '
                          : currentSelectedDetails.onScreenCurrentCanto + '.') +
                        currentSelectedDetails.onScreenCurrentChapterNumber +
                        '.' +
                        shlokaNumber,
                    )}
                    onPress={shlokaNumberSelection}
                  />
                  {shlokaNumber}
                </label>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View className="row mt-3">
        {totalShlokaList.length > 0 ? (
          <Button
            mode="contained"
            buttonColor="green"
            textColor="white"
            className="btn btn-primary mt-2"
            onPress={onSubmit}>
            Submit
          </Button>
        ) : (
          ''
        )}
      </View>
      <View className="row mt-3">
        <ChipsArray totalSelectedShlokaList={totalSelectedShlokaList} />
      </View>
      {<ShowToast showToast={showToast}></ShowToast>}
    </View>
  )
}

export default AddShloka2;

const styles = StyleSheet.create({})