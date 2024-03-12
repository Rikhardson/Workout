import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ExerciseContext, SettingsContext } from "./contexts/Contexts";
import Navigation from "./components/Navigation";
import { ExerciseData } from "./data/ExerciseData";
import { useFonts } from "expo-font";
import { PaperProvider } from "react-native-paper";
import { theme } from "./styles/Theme";

export default function App() {
  
  const [exercise, setExercise] = useState(ExerciseData);
  const [unit, setUnit] = useState("km");
  const [loaded] = useFonts({
    "RussoOne-Regular": require("./fonts/RussoOne-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
    <SettingsContext.Provider value={{ unit, setUnit }}>
      <ExerciseContext.Provider value={{ exercise, setExercise }}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </ExerciseContext.Provider>
    </SettingsContext.Provider>
    </PaperProvider>
  );
}