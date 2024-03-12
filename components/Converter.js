import { Text } from "react-native-paper";

export function Converter({
  text,
  userSelectedUnit,
  exerciseDistance,
  exerciseUnit,
}) {
  let renderDistance;
  switch (userSelectedUnit) {
    
    case "km":
      
      if (userSelectedUnit !== exerciseUnit) {
        
        renderDistance = convertMilesToKilometers(exerciseDistance);

      } else {
        renderDistance = exerciseDistance;
      }
      
      break;

    case "ml":
   
      if (userSelectedUnit !== exerciseUnit) {
        
        renderDistance = convertKilometersToMiles(exerciseDistance);

      } else {
        renderDistance = exerciseDistance;
      }
      
      break;
    default:
      
      renderDistance = exerciseDistance;
  }
  return (
    <Text>
      {text} {renderDistance} {userSelectedUnit}
    </Text>
  );
}

function convertMilesToKilometers(miles) {
  return (Number(miles) * 1.60934).toFixed(0);
}

function convertKilometersToMiles(kilometers) {
  return (Number(kilometers) / 1.60934).toFixed(0);
}
