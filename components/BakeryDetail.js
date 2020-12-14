import React from "react";
import { observer } from "mobx-react";
import { Text } from "react-native";
import { Spinner } from "native-base";
import bakeryStore from "../stores/bakeryStore";
import cookieStore from "../stores/cookieStore";
import {
  BakeryDetailWrapper,
  BakeryDetailImage,
  BakeryDetailTitle,
} from "../styles";
import CookieList from "./CookieList";

const BakeryDetail = ({ navigation, route }) => {
  if (bakeryStore.loading) return <Spinner />;
  const { bakery, meaninglessNumber } = route.params;

  const cookiesFromCookieStore = bakery.cookies.map((cookie) =>
    cookieStore.getCookieById(cookie.id)
  );

  return (
    <>
      <BakeryDetailWrapper>
        <BakeryDetailImage source={{ uri: bakery.image }} />
        <BakeryDetailTitle>{bakery.name}</BakeryDetailTitle>
        <Text>{meaninglessNumber}</Text>
      </BakeryDetailWrapper>
      <CookieList cookies={cookiesFromCookieStore} />
    </>
  );
};

export default observer(BakeryDetail);
