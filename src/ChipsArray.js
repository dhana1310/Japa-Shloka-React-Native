import * as React from "react";
import { Text, View } from "react-native";
import { Chip } from 'react-native-paper';
import { Surface } from "react-native-paper";


const ChipsArray = ({ totalSelectedShlokaList }) => {
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
    <View>
        <Text>Existing/newly selected shlokas</Text>
      <Surface
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 3,
        }}
        component="ul"
      >
        {chipData.map((data) => {
          return (
              <Chip
                //   icon={icon}
                color={data.startsWith("BG") ? "primary" : data.startsWith("SB") ? "success" : "secondary"}
                //   onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              >{data}</Chip>
          );
        })}
      </Surface>
    </View>
  );
};

export default ChipsArray;
