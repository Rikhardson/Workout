import { useContext, useState } from "react";
import {
  Button,
  Modal,
  SegmentedButtons,
  Text,
  TextInput,
} from "react-native-paper";
import { Calendar } from "react-native-calendars";
import Styles, { MyTheme } from "../styles/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExerciseContext, SettingsContext } from "../contexts/Contexts";
import formatDate from "../components/Functions";

export default function AddExerciseView() {
  
  const { exercise, setExercise } = useContext(ExerciseContext);
  const { unit } = useContext(SettingsContext);

  const [selectedSport, setSelectedSport] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [date, setDate] = useState("");

  function dateSelected(day) {
    setCalendarVisible(false);
    setDate(day);
  }

  const handleChange = (text, setValueFunction) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setValueFunction(numericValue);
  };

  function addExercise() {
    if (distance && duration && date) {
      const newExercise = {
        selectedSport,
        distance,
        duration,
        date,
        unit,
      };
      setExercise((prevList) => [...prevList, newExercise]);

      setSelectedSport("");
      setDistance("");
      setDuration("");
      setDate("");
    }
  }

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.header} >Add Exercise</Text>
      <SegmentedButtons
        value={selectedSport}
        onValueChange={setSelectedSport}
        style={Styles.sports}
        buttons={[
          {
            value: "Run",
            label: "Run",
            icon: "run",
          },
          {
            value: "Row",
            label: "Row",
            icon: "rowing",
          },
          {
            value: "Hike",
            label: "Hike",
            icon: "hiking",
          },
          {
            value: "Swim",
            label: "Swim",
            icon: "swim",
          },
        ]}
      />
      {!calendarVisible && (
        <>
          <TextInput
            mode="outlined"
            label={`Distance (${unit})`}
            style={Styles.txtInput}
            value={distance}
            onChangeText={(text) => handleChange(text, setDistance)}
            keyboardType="numeric"
            maxLength={3}
          />
          <TextInput
            mode="outlined"
            label={"Duration (min)"}
            style={Styles.txtInput}
            value={duration}
            onChangeText={(text) => handleChange(text, setDuration)}
            keyboardType="numeric"
            maxLength={5}
          />
        </>
      )}
      <Modal visible={calendarVisible} transparent={true}>
        <Calendar
          style={{ borderWidth: 2 }}
          onDayPress={(day) => {
            dateSelected(day);
          }}
        />
      </Modal>

      {!calendarVisible && (
        <>
          <Button
            style={Styles.btnStyle}
            mode="outlined"
            onPress={() => setCalendarVisible(true)}
          >
            {date
              ? formatDate(date.dateString)
              : "Select date by clicking here"}
          </Button>
          <Button style={Styles.btnStyle} mode="outlined" onPress={addExercise}>
            Add Exercise
          </Button>
        </>
      )}
    </SafeAreaView>
  );
}
