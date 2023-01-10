import * as React from 'react';
import {Text, View} from 'react-native';
import {Chip} from 'react-native-paper';
import {Surface} from 'react-native-paper';

const ChipsArray = ({totalSelectedShlokaList}) => {
  const [chipData, setChipData] = React.useState(totalSelectedShlokaList);

  React.useEffect(() => {
    setChipData([...totalSelectedShlokaList]);
  }, [totalSelectedShlokaList]);

  //   const handleDelete = (chipToDelete) => () => {
  //     if (totalSelectedShlokaList.includes(chipToDelete)) {
  //       totalSelectedShlokaList.splice(totalSelectedShlokaList.indexOf(chipToDelete), 1);
  //     }
  //     setChipData([...totalSelectedShlokaList]);
  //   };

  return (
    <View id="chips-array-view"
      style={
        {
          // display: "flex",
          // justifyContent: "center",
          // flexWrap: "wrap",
          // float: 'left',
          // alignSelf: 'center',
          // padding: 0.5,
          // margin: 10,
        }
      }>
      <Text style={{color: 'green'}}>Existing/newly selected shlokas</Text>
      <Surface id="chips-array-surface"
        style={{
          // display: "flex",
          // justifyContent: "center",
          flexWrap: 'wrap',
          // alignSelf: 'center',
          padding: 0.5,
          // margin: 3,
        }}>
        {chipData.map(data => {
          return (
            <View
            key={`${data}` + "view"}
              style={{
                display: 'flex',
                // justifyContent: "center",
                flexWrap: 'wrap',
                float: 'left',
                // alignSelf: 'center',
                margin: 4,
                // padding: 0.5,
              }}>
              <Chip
                style={{
                  // display: "flex",
                  // justifyContent: "center",
                  flexWrap: 'wrap',
                  float: 'left',
                  // alignSelf: 'center',

                  // padding: 0.5,
                }}
                key={data}
                mode="outlined"
                //   icon={icon}
                elevated={true}
                selectedColor={
                  data.startsWith('BG')
                    ? 'red'
                    : data.startsWith('SB')
                    ? 'blue'
                    : '#cc00ff'
                }
                //   onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              >
                {data}
              </Chip>
            </View>
          );
        })}
      </Surface>
    </View>
  );
};

export default ChipsArray;
