import React from "react";
import { View, Text } from "react-native";
import { ListItem } from "native-base";
import { BakeryItemStyled, BakeryImage } from "../styles";

const BakeryItem = ({ bakery, navigation }) => {
  const meaninglessNumber = 5;
  return (
    <ListItem
      onPress={() =>
        navigation.navigate("BakeryDetail", { bakery, meaninglessNumber })
      }
    >
      <BakeryImage source={{ uri: bakery.image }} />
      <BakeryItemStyled>{bakery.name}</BakeryItemStyled>
    </ListItem>
  );
};

export default BakeryItem;
