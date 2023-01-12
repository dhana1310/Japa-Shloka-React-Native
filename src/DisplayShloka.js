import { Button, Card, ProgressBar, Switch } from 'react-native-paper';
import { useState, useEffect } from "react";
import { defaultUiState, errorCode, getDefaultBooksList, getDefaultTimeLineName, getDefaultTimeList, populateToast } from "./Constants";
import parseResponse from "./ParseResponse";
import useFetchMemorisedShlokas from "./useFetchMemorisedShlokas";
import ShowToast from "./ShowToast";
import { getData, storeData } from "./LocalAsyncStorage";
import { StyleSheet, View, Text, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { getFilePath } from '../assets/Assets';

const DisplayShloka = () => {
  const memorisedShlokas = useFetchMemorisedShlokas();

  const [allShlokasLinesFromText, setAllShlokasLinesFromText] = useState(["loading..."]);
  const [displayOneShloka, setDisplayOneShloka] = useState([]);
  const [originalResponse, setOriginalResponse] = useState({});
  const [savedDisplayUiState, setSavedDisplayUiState] = useState(defaultUiState);
  var defaultShlokas = Array.from(new Set(parseResponse(originalResponse, savedDisplayUiState)));
  const [allShlokaNumbers, setAllShlokaNumbers] = useState(defaultShlokas);
  const [deselectedShlokaNumbers, setDeselectedShlokaNumbers] = useState([]);
  const [timeLineList, setTimeLineList] = useState(getDefaultTimeList);
  // const [randomNumber, setRandomNumber] = useState(0);
  const [displayRandomShlokaNumber, setDisplayRandomShlokaNumber] = useState("");
  const [displayShlokaFlag, setDisplayShlokaFlag] = useState(false);
  const [displayShlokaNumberButtonFlag, setDisplayShlokaNumberButtonFlag] = useState(true);
  const [flowType, setFlowType] = useState(true);
  const [selectBooks, setSelectBooks] = useState([]);
  const [progressTotalSize, setProgressTotalSize] = useState(100);
  const [progressCurrentSize, setProgressCurrentSize] = useState(0);
  const [showToast, setShowToast] = useState(populateToast(false, "success", "Success", "Your data is saved.", "20%"));

  useEffect(() => {
    var displayUiStateObject = savedDisplayUiState;
    var localSelectBooks = selectBooks.length > 0 ? selectBooks : getDefaultBooksList();
    getData('@savedDisplayUiState').then(value => populate(value, displayUiStateObject, localSelectBooks));
    setSelectBooks([...localSelectBooks]);

    if (memorisedShlokas.error === errorCode) {
      setDisplayShlokaNumberButtonFlag(false);
      ToastAndroid.showWithGravity(
        errorCode,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      // setShowToast(populateToast(true, "error", "Error", errorCode, "100%"));
    } else {
      setDisplayShlokaNumberButtonFlag(true);
    }

    setAllShlokaNumbers(Array.from(new Set(parseResponse(memorisedShlokas, displayUiStateObject))));
    setOriginalResponse(memorisedShlokas);
    setProgressTotalSize(allShlokaNumbers.length > 0 ? allShlokaNumbers.length : 100);
    console.log(allShlokaNumbers);
  }, [memorisedShlokas]);

  function populate(savedDisplayUiState, displayUiStateObject, localSelectBooks) {
    console.log(savedDisplayUiState);
    if (savedDisplayUiState) {
      displayUiStateObject = savedDisplayUiState;
      localSelectBooks.forEach((book) => {
        book.isSelected = displayUiStateObject.currentSelectedBooks.includes(book.bookShortCode);
      });
      setFlowType(displayUiStateObject.flowType);
      setSavedDisplayUiState(displayUiStateObject);
    }
  }

  useEffect(() => {
    setProgressTotalSize(allShlokaNumbers.length > 0 ? allShlokaNumbers.length : 100);
  }, [allShlokaNumbers]);

  const onTimeLineChange = (event) => {
    const name = event.target.value;
    var displayUiStateObject = getDefaultTimeLineName(name);
    saveDisplayUiState(displayUiStateObject, selectBooks);
    setAllShlokaNumbers(Array.from(new Set(parseResponse(originalResponse, displayUiStateObject))));
    resetTheUiComponent(displayUiStateObject);
  };

  function saveDisplayUiState(displayUiStateObject, selectBooks) {
    var currentSelectedBooks = [];
    selectBooks.forEach((selectBook, index) => {
      if (selectBook.isSelected) {
        currentSelectedBooks.push(selectBook.bookShortCode);
      }
    });
    displayUiStateObject.currentSelectedBooks = currentSelectedBooks;
    displayUiStateObject.flowType = flowType;
    setSavedDisplayUiState(displayUiStateObject);
    storeData("@savedDisplayUiState", displayUiStateObject);
  }

  function resetTheUiComponent(timeLineName) {
    var localDefaultShlokas = Array.from(new Set(parseResponse(originalResponse, timeLineName)));
    deselectedShlokaNumbers.forEach((deselectedShlokaNumber) => {
      if (localDefaultShlokas.includes(deselectedShlokaNumber)) {
        localDefaultShlokas.splice(localDefaultShlokas.indexOf(deselectedShlokaNumber), 1);
      }
    });
    setAllShlokaNumbers(localDefaultShlokas);
    setProgressCurrentSize(0);
    setProgressTotalSize(localDefaultShlokas.length);
    setDisplayRandomShlokaNumber("");
    setDisplayShlokaNumberButtonFlag(localDefaultShlokas.length > 0);
  }

  const viewRandomShloka = () => {
    if (allShlokaNumbers.length === 0) {
      ToastAndroid.showWithGravity(
        "All shlokas done, refreshing",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      // setShowToast(populateToast(true, "info", "Info", "All shlokas done, refreshing", "100%"));
      resetTheUiComponent(savedDisplayUiState);
    } else {
      const index = flowType ? Math.floor(Math.random() * allShlokaNumbers.length) : 0;
      // setRandomNumber(ran);
      var nextShloka = allShlokaNumbers[index];
      setDisplayRandomShlokaNumber(nextShloka);

      var fileToLoad = "";
      if (nextShloka.startsWith("BG ")) {
        fileToLoad = "/" + nextShloka.substring(0, 2) + "/" + nextShloka.split(".")[0].substring(3) + ".txt";
      } else if (nextShloka.startsWith("SB ")) {
        fileToLoad = "/" + nextShloka.substring(0, 2) + "/" + nextShloka.split(".")[0].substring(3) + "/" + nextShloka.split(".")[1] + ".txt";
      } else if (nextShloka.startsWith("CC ")) {
        fileToLoad = "/" + nextShloka.substring(0, 2) + "/" + nextShloka.split(".")[0].substring(3).split(" ")[0] + "/" + nextShloka.split(".")[0].split(" ")[2] + ".txt";
      }
      fileToLoad = "/books" + fileToLoad;
      console.log(fileToLoad);
      fetch(fileToLoad)
        .then((r) => r.text())
        .then((text) => {
          const splitLines = text.split("\n");
          setAllShlokasLinesFromText(Array.from(splitLines.map((line) => line + "\n")));
        });
      setProgressCurrentSize(progressCurrentSize + 1);
      allShlokaNumbers.splice(index, 1);
      setAllShlokaNumbers(allShlokaNumbers);
    }
    setDisplayShlokaFlag(false);
    setDisplayOneShloka([]);
  };

  const handleDisplayButton = () => {
    displayOneShloka.splice(0, displayOneShloka.length);
    setDisplayOneShloka(displayOneShloka);
    var temp = false;
    var onlyShlokaNumber = "";
    var displayMulitpleShlokaNumbers = "";
    if (displayRandomShlokaNumber.startsWith("BG")) {
      displayMulitpleShlokaNumbers = displayRandomShlokaNumber.split(".")[0] + ".";
      onlyShlokaNumber = displayRandomShlokaNumber.toLowerCase().split(".")[1];
    } else if (displayRandomShlokaNumber.startsWith("SB")) {
      displayMulitpleShlokaNumbers = displayRandomShlokaNumber.split(".")[0] + "." + displayRandomShlokaNumber.split(".")[1] + ".";
      onlyShlokaNumber = displayRandomShlokaNumber.toLowerCase().split(".")[2];
    } else if (displayRandomShlokaNumber.startsWith("CC")) {
      displayMulitpleShlokaNumbers = displayRandomShlokaNumber.split(".")[0] + ".";
      onlyShlokaNumber = displayRandomShlokaNumber.toLowerCase().split(".")[1];
    }
    for (let k = 0; k < allShlokasLinesFromText.length; k++) {
      var multipleCheck = false;

      if (allShlokasLinesFromText[k].trim().toLowerCase().startsWith("texts ")) {
        var multipleShlokas = allShlokasLinesFromText[k].trim().toLowerCase().substring(6).split("-");
        if (parseInt(multipleShlokas[0]) <= parseInt(onlyShlokaNumber) && parseInt(onlyShlokaNumber) <= parseInt(multipleShlokas[1])) {
          multipleCheck = true;
          displayMulitpleShlokaNumbers = displayMulitpleShlokaNumbers + allShlokasLinesFromText[k].trim().toLowerCase().substring(6);
        }
      }

      var check =
        allShlokasLinesFromText[k]
          .trim()
          .toLowerCase()
          .startsWith("text " + onlyShlokaNumber) ||
        allShlokasLinesFromText[k]
          .trim()
          .toLowerCase()
          .startsWith("texts " + onlyShlokaNumber);
      if (check || multipleCheck) {
        temp = true;
        displayOneShloka.push(multipleCheck ? displayMulitpleShlokaNumbers : displayRandomShlokaNumber);
        continue;
      } else if (temp && !allShlokasLinesFromText[k].toLowerCase().startsWith("text")) {
        displayOneShloka.push(allShlokasLinesFromText[k]);
      }
      if (temp && allShlokasLinesFromText[k].toLowerCase().startsWith("text")) {
        break;
      }
    }
    setDisplayShlokaFlag(!displayShlokaFlag);
  };

  const ParaDisplay = ({ line }) => {
    if (
      line.toLowerCase().startsWith("synonyms") ||
      line.toLowerCase().startsWith("translation") ||
      line.toLowerCase().startsWith("bg") ||
      line.toLowerCase().startsWith("sb") ||
      line.toLowerCase().startsWith("cc")
    ) {
      return <Text variant="titleLarge" style={{ color: "#1b5e20", fontWeight: "bold", fontSize: 35 }}>{line}</Text>;
    }
    return <Text variant="bodyMedium" style={{ fontWeight: "bold", fontSize: 25 }}>{line}</Text>;
  };

  const shuffleShlokaNumbers = (allShlokaNumbers, bookShortCode, deselectedShlokaNumbers) => {
    allShlokaNumbers.forEach((shlokaNumber) => {
      if (shlokaNumber.startsWith(bookShortCode)) {
        deselectedShlokaNumbers.push(shlokaNumber);
      }
    });
    deselectedShlokaNumbers.forEach((deselectedShlokaNumber) => {
      if (allShlokaNumbers.includes(deselectedShlokaNumber)) {
        allShlokaNumbers.splice(allShlokaNumbers.indexOf(deselectedShlokaNumber), 1);
      }
    });
  };

  const onBookSelection = (event) => {
    selectBooks.forEach((book) => {
      if (book.bookShortCode === event.target.id) {
        book.isSelected = !book.isSelected;
      }
    });
    saveDisplayUiState(savedDisplayUiState, selectBooks);
    setSelectBooks([...selectBooks]);
    var localAllShlokaNumbers = allShlokaNumbers;
    var localDeselectedShlokaNumbers = deselectedShlokaNumbers;
    // console.log(event.target.id + "=" + event.target.checked);
    if (!event.target.checked) {
      shuffleShlokaNumbers(localAllShlokaNumbers, event.target.id, localDeselectedShlokaNumbers);
    } else {
      shuffleShlokaNumbers(localDeselectedShlokaNumbers, event.target.id, localAllShlokaNumbers);
    }
    setAllShlokaNumbers(localAllShlokaNumbers);
    setDeselectedShlokaNumbers(localDeselectedShlokaNumbers);
    setDisplayShlokaNumberButtonFlag(localAllShlokaNumbers.length > 0);
    setProgressTotalSize(localAllShlokaNumbers.length > 0 ? localAllShlokaNumbers.length : 100);
    setProgressCurrentSize(0);
  };

  const flowTypeClick = () => {
    var localSavedDisplayUiState = savedDisplayUiState;
    localSavedDisplayUiState.flowType = !flowType;
    setFlowType(!flowType);
    setSavedDisplayUiState(localSavedDisplayUiState);
    storeData("@savedDisplayUiState", localSavedDisplayUiState);
  };

  return (
    <View style={{ marginTop: 20 }}>
      {selectBooks.map((selectBook, index) => (
        <View  style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          p: 1,
          mt: 0,
          mr: 1,
          ml: 1,
          mb: 1,
        }} key={selectBook.bookShortCode}>
          <Switch type="checkbox" id={selectBook.bookShortCode} color="green" value={selectBook.isSelected} name={selectBook.bookName} onValueChange={onBookSelection} />
          <Text style={{ fontWeight: "bold", fontSize: 20, color:"green" }}>{selectBook.bookName}</Text>
        </View>
      ))}
      <View>
            <RNPickerSelect
              onValueChange={onTimeLineChange}
              items={timeLineList.map(c => ({
                label: c.timeLineName,
                value: c.timeLineName,
              }))}
              style={pickerSelectStyles}
              value={getDefaultTimeLineName(savedDisplayUiState.timeLineName).timeLineName}
            />
          </View>
      <View style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }} key="flowType">
          <Switch type="checkbox" id="flowType" value={flowType} onValueChange={flowTypeClick} color="green" />
          <Text style={{ fontWeight: "bold", fontSize: 20, color:"green" }}>Random</Text>
      </View>
      <ProgressBar animatedValue={(progressCurrentSize) / progressTotalSize} />
      <Text style={{color:"green"}}>
        {`${Math.round((progressCurrentSize * 100) / progressTotalSize)}%`}
      </Text>
      <Button mode="contained" buttonColor="green" textColor="red" onPress={viewRandomShloka} disabled={!displayShlokaNumberButtonFlag}>
        View shloka
      </Button>
      {displayRandomShlokaNumber ? (
        <Card mode="elevated">
        <Card.Content>
          <Text variant="titleLarge" style={{ fontWeight: "bold", fontSize: 40,color:"black" }}>{displayRandomShlokaNumber}</Text>
        </Card.Content>
      </Card>
      ) : (
        ""
      )}
        <Button
          style={{
            // display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            // listStyle: "none",
            p: 1,
            mt: 0,
            mr: 1,
            ml: 1,
            mb: 1,
          }}
          mode="contained"
          buttonColor="green" textColor="red"
          onPress={handleDisplayButton}
          disabled={!displayRandomShlokaNumber}
        >
          {displayShlokaFlag ? "Hide the shloka" : "Display the shloka"}
        </Button>
      {displayShlokaFlag ? (
        <Card
          id="showFullShloka"
          mode="elevated"
          style={{
            // display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            // listStyle: "none",
            p: 1,
            mt: 3,
            mr: 1,
            ml: 1,
            mb: 3,
          }}
          elevation={10}
          // component="p"
        >
          <Card.Content>
          {displayOneShloka.map((line) => (
            <ParaDisplay key={Math.random()} line={line} />
          ))}
          </Card.Content>
        </Card>
      ) : (
        ""
      )}

      {/* {<ShowToast showToast={showToast}></ShowToast>} */}
    </View>
  );
};

export default DisplayShloka;


const styles = StyleSheet.create({});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },});