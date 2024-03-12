import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import Styles from "../styles/Styles";
import { useContext } from "react";
import { SettingsContext } from "../contexts/Contexts";

export default function SettingsView() {

  const { unit, setUnit } = useContext(SettingsContext);
  
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>SETTINGS</Text>
      <Text style={Styles.settingsDescr}>
        Here you can choose to use kilometers or miles as the unit of measure.
      </Text>
      <View style={Styles.radioAlign}>
        <RadioButton
          value="km"
          status={unit === "km" ? "checked" : "unchecked"}
          onPress={() => setUnit("km")}
        />
        <Text>Kilometers</Text>
      </View>
      <View style={Styles.radioAlign}>
        <RadioButton
          value="ml"
          status={unit === "ml" ? "checked" : "unchecked"}
          onPress={() => setUnit("ml")}
        />
        <Text>Miles</Text>
      </View>
    </View>
  );
}
