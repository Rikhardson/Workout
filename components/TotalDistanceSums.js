import { View } from "react-native";
import { Chip, Icon, Text } from "react-native-paper";
import Styles from "../styles/Styles";

export function TotalDistanceSums({ userSelectedUnit, exerciseList }) {
  let totalDistanceRun;
  let totalDistanceRow;
  let totalDistanceHike;
  let totalDistanceSwim;

  switch (userSelectedUnit) {
    case "km":
      
      totalDistanceRun =
        findAll(exerciseList, "Run").totalMiles * 1.60934 +
        findAll(exerciseList, "Run").totalKilometers;
      totalDistanceRow =
        findAll(exerciseList, "Row").totalMiles * 1.60934 +
        findAll(exerciseList, "Row").totalKilometers;
      totalDistanceHike =
        findAll(exerciseList, "Hike").totalMiles * 1.60934 +
        findAll(exerciseList, "Hike").totalKilometers;
      totalDistanceSwim =
        findAll(exerciseList, "Swim").totalMiles * 1.60934 +
        findAll(exerciseList, "Swim").totalKilometers;
      break;
    case "ml":
      
      totalDistanceRun =
        findAll(exerciseList, "Run").totalMiles +
        findAll(exerciseList, "Run").totalKilometers / 1.60934;
      totalDistanceRow =
        findAll(exerciseList, "Row").totalMiles +
        findAll(exerciseList, "Row").totalKilometers / 1.60934;
      totalDistanceHike =
        findAll(exerciseList, "Hike").totalMiles +
        findAll(exerciseList, "Hike").totalKilometers / 1.60934;
      totalDistanceSwim =
        findAll(exerciseList, "Swim").totalMiles +
        findAll(exerciseList, "Swim").totalKilometers / 1.60934;
      break;
  }
  return (
    <View>
      <Text style={Styles.totalExTxt}>Total of all exercises:</Text>
      <Chip style={Styles.chipStyle} icon={(p) => <Icon {...p} source={"run"} size={25} />}>
        <Text> 
          {totalDistanceRun.toFixed(0)} {userSelectedUnit}
        </Text>
      </Chip>
      <Chip style={Styles.chipStyle} icon={(p) => <Icon {...p} source={"rowing"} size={25} />}>
        <Text>
          {totalDistanceRow.toFixed(0)} {userSelectedUnit}
        </Text>
      </Chip>
      <Chip style={Styles.chipStyle} icon={(p) => <Icon {...p} source={"hiking"} size={25} />}>
        <Text>
          {totalDistanceHike.toFixed(0)} {userSelectedUnit}
        </Text>
      </Chip>
      <Chip style={Styles.chipStyle} icon={(p) => <Icon {...p} source={"swim"} size={25} />}>
        <Text>
          {totalDistanceSwim.toFixed(0)} {userSelectedUnit}
        </Text>
      </Chip>
    </View>
  );
}

const findAll = (exerciseArray, sport) => {
  let totalMiles = exerciseArray
    .filter(
      (exercise) => exercise.selectedSport === sport && exercise.unit === "ml"
    )
    .reduce((result, { distance }) => (result += Number(distance)), 0);

  let totalKilometers = exerciseArray
    .filter(
      (exercise) => exercise.selectedSport === sport && exercise.unit === "km"
    )
    .reduce((result, { distance }) => (result += Number(distance)), 0);

  return { totalMiles, totalKilometers };
};
