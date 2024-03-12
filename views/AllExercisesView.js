import { ScrollView, View } from "react-native";
import { Card, Chip, Icon, Text } from "react-native-paper";
import Styles from "../styles/Styles";
import { ExerciseContext, SettingsContext } from "../contexts/Contexts";
import { useContext } from "react";
import formatDate from "../components/Functions";
import { Converter } from "../components/Converter";
import { TotalDistanceSums } from "../components/TotalDistanceSums";

export default function AllExcercisesView() {
  
  const { exercise } = useContext(ExerciseContext);
  const { unit } = useContext(SettingsContext);

  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text style={Styles.header}>ALL EXERCISES</Text>
        
        {exercise.map((e, i) => (
          <Card key={i} style={Styles.cardStyle}>
            <Card.Content>
              <Text variant="titleLarge">{e.selectedSport}</Text>
              <Converter
                text="Distance: "
                userSelectedUnit={unit}
                exerciseDistance={e.distance}
                exerciseUnit={e.unit}
              />
              <Text>Duration: {e.duration} min</Text>
              <Text>Date: {formatDate(e.date.dateString)}</Text>
            </Card.Content>
          </Card>
        ))}
        <TotalDistanceSums userSelectedUnit={unit} exerciseList={exercise} />
      </View>
    </ScrollView>
  );
}
