import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  faHome,
  faHistory,
  faCloud,
  faUserCog
} from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../constants/theme";
import { useHistory } from "react-router-dom";
import { routes } from "../../router/routes";

let FontAwesomeIcon: any;

if (Platform.OS === "web") {
  FontAwesomeIcon = require("@fortawesome/react-fontawesome").FontAwesomeIcon;
} else {
  FontAwesomeIcon = require("@fortawesome/react-native-fontawesome")
    .FontAwesomeIcon;
}

export const Footer = () => {
  const { push, location } = useHistory();

  return (
    <Wrapper>
      <TouchableOpacity onPressIn={() => push(routes.home)}>
        <FontAwesomeIcon size={18} color={colors.LIST_ICON} icon={faHome} />
      </TouchableOpacity>

      <TouchableOpacity onPressIn={() => push(routes.previous)}>
        <FontAwesomeIcon size={18} color={colors.LIST_ICON} icon={faHistory} />
      </TouchableOpacity>

      <TouchableOpacity onPressIn={() => push(routes.search)}>
        <FontAwesomeIcon size={18} color={colors.LIST_ICON} icon={faCloud} />
      </TouchableOpacity>

      <TouchableOpacity onPressIn={() => push(routes.settings)}>
        <FontAwesomeIcon size={18} color={colors.LIST_ICON} icon={faUserCog} />
      </TouchableOpacity>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: ${props => props.theme.sizes.headerHeight};
  background-color: white;
  border-top-width: 1px;
  border-top-color: #ccc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;
`;
