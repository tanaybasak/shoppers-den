import React from "react";
import { withRouter } from "react-router";
import {
  BackgroundImageContainer,
  ContentTitle,
  MenuItemContainer,
  ContentSubtitle,
  ContentContainer,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <ContentContainer>
      <ContentTitle> {title.toUpperCase()}</ContentTitle>
      <ContentSubtitle> SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);

//withRouter :  HOC is a component that takes one component as input and trnasform it into another component //
