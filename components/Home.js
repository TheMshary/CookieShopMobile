import React from "react";
import { View, Text, ImageBackground } from "react-native";
import {
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
  BottomStyling,
  ButtonStyled,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://annabanana.co/wp-content/uploads/2020/03/Chocolate-Chip-Cookies-22.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Cookies & Beyond</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => navigation.navigate("BakeryList")}>
            Click here to skip
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
