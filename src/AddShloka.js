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
import {View} from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
const AddShloka = () => {
  const memorisedShlokas = useFetchMemorisedShlokas();
  const [totalChaptersList, setTotalChaptersList] = useState([]);
  const [totalCantosList, setTotalCantosList] = useState([]);
  const [totalShlokaList, setTotalShlokaList] = useState([]);
  const [totalSelectedShlokaList, setTotalSelectedShlokaList] = useState([]);
  const [currentSelectedDetails, setCurrentSelectedDetails] = useState(
    defaultCurrentSelectedDetails,
  );
  const [showToast, setShowToast] = useState(
    populateToast(
      false,
      'error',
      'Error',
      'Unable to fetch the existing shlokas!!',
      '100%',
    ),
  );

  const populateChaptersDropDown = shloka => {
    var chapterDropDown = ['Select the chapter'];
    chapterDropDown.push(...createSequenceList(shloka.chaptersList.length));
    setTotalChaptersList(chapterDropDown);
  };

  useEffect(() => {
    if (memorisedShlokas.error === errorCode) {
      storeData('@savedShlokas', defaultCurrentSelectedDetails);
    }

    setCurrentSelectedDetails(memorisedShlokas);
    setTotalSelectedShlokaList(
      Array.from(new Set(parseResponse(memorisedShlokas, defaultUiState))),
    );
  }, [memorisedShlokas]);

  const populateTheDropDowns = shortCode => {
    shlokaList.forEach(shloka => {
      if (shortCode === shloka.bookShortCode) {
        var cantoDropDown = [];
        if (shortCode === 'BG') {
          populateChaptersDropDown(shloka);
        } else if (shortCode === 'SB') {
          cantoDropDown = ['Select the canto'];
          cantoDropDown.push(...createSequenceList(shloka.cantosList.length));
          setTotalCantosList(cantoDropDown);
        } else if (shortCode === 'CC') {
          cantoDropDown = ['Select the lila'];
          cantoDropDown.push(...['Adi', 'Madhya', 'Antya']);
          setTotalCantosList(cantoDropDown);
        }
      }
    });
  };

  const onBookChange = event => {
    setTotalChaptersList([]);
    setTotalShlokaList([]);
    setTotalCantosList([]);
    // const selectedIndex = event.target.options.selectedIndex;
    // const shortCode = event.target.options[selectedIndex].getAttribute("data-key");
    const shortCode = event.target.value;
    currentSelectedDetails.onScreenCurrentBook = shortCode;
    populateTheDropDowns(shortCode);
    setCurrentSelectedDetails(currentSelectedDetails);

    // history(`/addToList/${shortCode}`);
  };

  const onCantoChange = event => {
    setTotalChaptersList([]);
    setTotalShlokaList([]);
    // const selectedIndex = e.target.options.selectedIndex;
    // const cantoShortCode = e.target.options[selectedIndex].getAttribute("data-key");
    const cantoShortCode = event.target.value.toString();
    currentSelectedDetails.onScreenCurrentCanto = cantoShortCode;
    // console.log(currentSelectedDetails.onScreenCurrentBook + " -> " + cantoShortCode + " -> " + e.target.value);
    shlokaList
      .filter(
        selectedBook =>
          selectedBook.bookShortCode ===
          currentSelectedDetails.onScreenCurrentBook,
      )
      .forEach(selectedBook => {
        selectedBook.cantosList
          .filter(canto => canto.cantoNumber === cantoShortCode)
          .forEach(canto => {
            var chapterDropDown = ['Select the chapter'];
            chapterDropDown.push(
              ...createSequenceList(canto.chaptersList.length),
            );
            setTotalChaptersList(chapterDropDown);

            currentSelectedDetails.allShlokasList
              .filter(
                shloka =>
                  shloka.bookShortCode ===
                  currentSelectedDetails.onScreenCurrentBook,
              )
              .forEach(shloka => {
                if (
                  shloka.cantosList.filter(
                    canto => canto.cantoNumber === cantoShortCode,
                  ).length === 0
                ) {
                  shloka.cantosList.push({
                    cantoNumber: cantoShortCode,
                    chaptersList: [],
                  });
                }
                shloka.cantosList.sort((a, b) => a.cantoNumber - b.cantoNumber);
              });

            setCurrentSelectedDetails(currentSelectedDetails);
          });
      });

    // history(`/addToList/${shortCode}`);
  };

  const onChapterChange = event => {
    setTotalShlokaList([]);
    // const selectedIndex = e.target.options.selectedIndex;
    // const shortCode = e.target.options[selectedIndex].getAttribute("data-key");
    currentSelectedDetails.onScreenCurrentChapterNumber =
      event.target.value.toString();
    shlokaList
      .filter(
        selectedBook =>
          selectedBook.bookShortCode ===
          currentSelectedDetails.onScreenCurrentBook,
      )
      .forEach(selectedBook => {
        if (currentSelectedDetails.onScreenCurrentBook === 'BG') {
          selectedBook.chaptersList
            .filter(
              chapter =>
                chapter.chapterNumber ===
                currentSelectedDetails.onScreenCurrentChapterNumber,
            )
            .forEach(chapter => {
              setTotalShlokaList(chapter.allShlokaCount);
            });

          currentSelectedDetails.allShlokasList
            .filter(
              shloka =>
                shloka.bookShortCode ===
                currentSelectedDetails.onScreenCurrentBook,
            )
            .forEach(shloka => {
              if (
                shloka.chaptersList.filter(
                  chapter =>
                    chapter.chapterNumber ===
                    currentSelectedDetails.onScreenCurrentChapterNumber,
                ).length === 0
              ) {
                shloka.chaptersList.push({
                  chapterNumber:
                    currentSelectedDetails.onScreenCurrentChapterNumber,
                  selectedShlokas: [],
                });
              }
              shloka.chaptersList.sort(
                (a, b) => a.chapterNumber - b.chapterNumber,
              );
            });
        } else if (
          currentSelectedDetails.onScreenCurrentBook === 'SB' ||
          currentSelectedDetails.onScreenCurrentBook === 'CC'
        ) {
          selectedBook.cantosList
            .filter(
              canto =>
                canto.cantoNumber ===
                currentSelectedDetails.onScreenCurrentCanto,
            )
            .forEach(canto => {
              canto.chaptersList
                .filter(
                  chapter =>
                    chapter.chapterNumber ===
                    currentSelectedDetails.onScreenCurrentChapterNumber,
                )
                .forEach(chapter => {
                  setTotalShlokaList(chapter.allShlokaCount);
                });
            });

          currentSelectedDetails.allShlokasList
            .filter(
              shloka =>
                shloka.bookShortCode ===
                currentSelectedDetails.onScreenCurrentBook,
            )
            .forEach(shloka => {
              shloka.cantosList
                .filter(
                  canto =>
                    canto.cantoNumber ===
                    currentSelectedDetails.onScreenCurrentCanto,
                )
                .forEach(canto => {
                  if (
                    canto.chaptersList.filter(
                      chapter =>
                        chapter.chapterNumber ===
                        currentSelectedDetails.onScreenCurrentChapterNumber,
                    ).length === 0
                  ) {
                    canto.chaptersList.push({
                      chapterNumber:
                        currentSelectedDetails.onScreenCurrentChapterNumber,
                      selectedShlokas: [],
                    });
                  }
                  canto.chaptersList.sort(
                    (a, b) => a.chapterNumber - b.chapterNumber,
                  );
                });
            });
        }
        setCurrentSelectedDetails(currentSelectedDetails);
      });

    // history(`/addToList/${shortCode}`);
  };

  const addRemoveShlokas = (event, chapter, shlokaValue) => {
    if (!totalSelectedShlokaList.includes(shlokaValue)) {
      totalSelectedShlokaList.push(shlokaValue);
    } else {
      totalSelectedShlokaList.splice(
        totalSelectedShlokaList.indexOf(shlokaValue),
        1,
      );
    }
    var [isShlokaPresent, index] = hasShloka(
      chapter.selectedShlokas,
      event.target.id,
    );
    if (event.target.checked && !isShlokaPresent) {
      var today = new Date();
      // today.setDate(today.getDate() - 9);
      chapter.selectedShlokas.push({
        shlokaNumber: event.target.id,
        addedDate: today,
      });
    } else if (!event.target.checked) {
      if (isShlokaPresent) {
        chapter.selectedShlokas.splice(index, 1);
      }
    }
    chapter.selectedShlokas.sort((a, b) => a.shlokaNumber - b.shlokaNumber);
  };

  const hasShloka = (selectedShlokas, id) => {
    var isPresent = false;
    var localIndex = 0;
    selectedShlokas.forEach((shloka, index) => {
      if (shloka.shlokaNumber === id) {
        isPresent = true;
        localIndex = index;
      }
    });
    return [isPresent, localIndex];
  };

  const shlokaNumberSelection = event => {
    var shlokaValue = currentSelectedDetails.onScreenCurrentBook + ' ';
    if (currentSelectedDetails.onScreenCurrentBook === 'BG') {
      currentSelectedDetails.allShlokasList
        .filter(
          shloka =>
            shloka.bookShortCode === currentSelectedDetails.onScreenCurrentBook,
        )
        .forEach(shloka => {
          shloka.chaptersList
            .filter(
              chapter =>
                chapter.chapterNumber ===
                currentSelectedDetails.onScreenCurrentChapterNumber,
            )
            .forEach(chapter => {
              shlokaValue =
                shlokaValue +
                currentSelectedDetails.onScreenCurrentChapterNumber +
                '.' +
                event.target.id;
              addRemoveShlokas(event, chapter, shlokaValue);
            });
        });
    } else if (
      currentSelectedDetails.onScreenCurrentBook === 'SB' ||
      currentSelectedDetails.onScreenCurrentBook === 'CC'
    ) {
      currentSelectedDetails.allShlokasList
        .filter(
          shloka =>
            shloka.bookShortCode === currentSelectedDetails.onScreenCurrentBook,
        )
        .forEach(shloka => {
          shloka.cantosList
            .filter(
              canto =>
                canto.cantoNumber ===
                currentSelectedDetails.onScreenCurrentCanto,
            )
            .forEach(canto => {
              canto.chaptersList
                .filter(
                  chapter =>
                    chapter.chapterNumber ===
                    currentSelectedDetails.onScreenCurrentChapterNumber,
                )
                .forEach(chapter => {
                  shlokaValue =
                    shlokaValue +
                    currentSelectedDetails.onScreenCurrentCanto +
                    (currentSelectedDetails.onScreenCurrentBook === 'CC'
                      ? ' '
                      : '.') +
                    currentSelectedDetails.onScreenCurrentChapterNumber +
                    '.' +
                    event.target.id;
                  addRemoveShlokas(event, chapter, shlokaValue);
                });
            });
        });
    }
    setTotalSelectedShlokaList([...totalSelectedShlokaList]);

    setCurrentSelectedDetails(currentSelectedDetails);
  };

  const saveMemorisedShlokas = async () => {
    const rsp = await fetch('http://localhost:8080/api/v1/shlokas', {
      method: 'POST',
      body: JSON.stringify(currentSelectedDetails),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          setShowToast(
            populateToast(
              true,
              'success',
              'Success',
              'Your data is saved!!',
              '100%',
            ),
          );
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .catch(error => {
        console.error('Unable to save the data!!');
        setShowToast(
          populateToast(
            true,
            'error',
            'Error',
            'Unable to save the data!!',
            '100%',
          ),
        );
      });
  };

  const onSubmit = event => {
    event.preventDefault();
    currentSelectedDetails.error = null;
    storeData('@savedShlokas', currentSelectedDetails);
    setShowToast(
      populateToast(true, 'success', 'Success', 'Your data is saved!!', '100%'),
    );
    console.log(JSON.stringify(currentSelectedDetails));
    // saveMemorisedShlokas();
  };

  return (
    <View>
      <View className="row mt-3">
        <View className="col-md-14 mb-3">
          <View>
            <RNPickerSelect
              onValueChange={onBookChange}
              items={shlokaList.map(c => ({
                label: c.bookName,
                value: c.bookShortCode,
              }))}
            />
          </View>
          {totalCantosList.length > 0 && (
            <View>
              <RNPickerSelect
                onValueChange={onCantoChange}
                items={totalCantosList.map(c => ({label: c, value: c}))}
              />
            </View>
          )}
          {totalChaptersList.length > 0 && (
            <View>
                <RNPickerSelect
                onValueChange={onChapterChange}
                items={totalChaptersList.map(c => ({label: c, value: c}))}
              />
            </View>
          )}
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
  );
};

export default AddShloka;
