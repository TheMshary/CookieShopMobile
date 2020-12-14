import React from "react";
import { ListItem } from "native-base";
import { Text } from "react-native";
import {
  BakeryItemStyled,
  BakeryImage,
  //   ItemWrapper,
  //   ItemContentWrapper,
} from "../styles";

const CookieItem = ({ cookie }) => {
  return (
    <ListItem>
      <BakeryImage source={{ uri: cookie.image }} />
      <BakeryItemStyled>
        {cookie.name} {"\n"}
        <Text style={{ fontSize: 16, color: "#444" }}>{cookie.price} KD</Text>
      </BakeryItemStyled>
    </ListItem>
  );
};

export default CookieItem;
