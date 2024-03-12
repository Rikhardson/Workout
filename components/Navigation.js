import { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import AddExerciseView from "../views/AddExerciseView";
import AllExercisesView from "../views/AllExercisesView";
import SettingsView from "../views/SettingsView";

const AddExerciseRoute = () => <AddExerciseView />;

const AllExercisesRoute = () => <AllExercisesView />;

const SettingsRoute = () => <SettingsView />;

export default function Navigation() {

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "addex",
      title: "Add Exercise",
      focusedIcon: "heart-plus",
      unfocusedIcon: "heart-plus-outline",
    },
    {
      key: "allex",
      title: "All Exercises",
      focusedIcon: "clipboard-list",
      unfocusedIcon: "clipboard-list-outline",
    },
    {
      key: "settings",
      title: "Settings",
      focusedIcon: "cog",
      unfocusedIcon: "cog-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    addex: AddExerciseRoute,
    allex: AllExercisesRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
