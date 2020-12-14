import React from "react";
import { View, Text } from "react-native";
import { List, Content, Spinner } from "native-base";
import { observer } from "mobx-react";
import bakeryStore from "../stores/bakeryStore";

// Components
import BakeryItem from "./BakeryItem";

const BakeryList = ({ navigation }) => {
  if (bakeryStore.loading) return <Spinner />;

  const bakeryList = bakeryStore.bakeries.map((bakery) => (
    <BakeryItem navigation={navigation} bakery={bakery} />
  ));
  return (
    <Content>
      <List>{bakeryList}</List>
    </Content>
  );
};

export default observer(BakeryList);
