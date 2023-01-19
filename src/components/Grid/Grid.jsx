import React from "react";

import {
  Title1,
  Title2,
  TitleButton,
  TitleCol,
  TitleContainer,
  TitlePage,
  TitleRow,
} from "./Grid.Style";

export const Grid = () => {
  return (
    <TitlePage>
      <TitleContainer>
        <TitleRow>
          <TitleCol xs="auto">
            <div>
              <Title1>
                START THE MOST SELLER-FRIENDLY MARKETPLACE WITH CS-CART
                MULTI-VENDOR
              </Title1>
              <Title2>
                Powering over 35,000 stores & marketplaces worldwide since 2005
              </Title2>
              <br />
              <TitleButton variant="danger">TRY FOR FREE</TitleButton>
            </div>
          </TitleCol>
        </TitleRow>
      </TitleContainer>
    </TitlePage>
  );
};
export default Grid;
