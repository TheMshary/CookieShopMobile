import React from "react";
import { View, Text } from "react-native";
import { List, Content, Spinner } from "native-base";
import CookieItem from "./CookieItem";

const CookieList = ({ cookies }) => {
  const cookieList = cookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));
  return (
    <Content>
      <List>{cookieList}</List>
    </Content>
  );
};

export default CookieList;
