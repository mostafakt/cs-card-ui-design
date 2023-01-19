import styled from "styled-components";
import { Button, Col, Container, Row } from "react-bootstrap";

export const TitlePage = styled.div`
  width: 100%;
  display: flex;
  justify-items: center;
  position: absolute;
  z-index: 2;
`;

export const TitleContainer = styled(Container)`
  width: 1170px;
  display: flex;
  align-content: center;
  justify-content: center;
  justify-items: flex-end;
  align-items: flex-end;
`;
export const TitleRow = styled(Row)`
  margin-top: 160px;
  margin-left: -226px;
  width: auto;
`;
export const TitleCol = styled(Col)`
  width: 939px;
`;
export const Title1 = styled.h1`
  color: white;
  font-size: 35.4999px;
`;
export const Title2 = styled.h1`
  margin-top: 25px;
  color: white;
  font-weight: 400;
  font-size: 1.529rem;
`;
export const TitleButton = styled(Button)`
  border-radius: 100px;
  padding: 13px 26px;
`;
