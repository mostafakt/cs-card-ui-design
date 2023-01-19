import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

export const PostContainer = styled.div`
  margin-left: 179px;
  margin-right: 163px;
`;
export const PostImage = styled.img`
  width: 439px;
  height: 292px;
`;
export const DescriptionImage = styled.img`
  width: 324px;
  height: 56px;
`;
export const PostDescriptionContainer = styled.div`
  width: 683px;
  height: 291px;
`;
export const PostRowContainer = styled.div`
  max-width: 1140px;
  max-height: 292px;
`;
export const DescriptionTitle = styled.div`
  max-width: 653px;
  max-height: 81px;
  font-size: 18.5px;
  margin-top: 10px;
`;
export const IconNumber = styled.div`
  font-size: 26px;
  color: #2f435b;
  display: flex;
  justify-content: center;
`;
export const IconTitle = styled.div`
  font-size: 15px;
  color: #2f435b;
  display: flex;
  justify-content: center;
`;
export const IconSympole = styled.div`
  display: flex;
  justify-content: center;
`;
export const IconContainer = styled(Col)`
  width: 100%;
  display: flex;
  justify-content: center !important;
  color: #2f435b;
  flex-direction: column !important;
  max-width: 163px;
`;
export const PostRow = styled(Row)`
  margin-top: 18px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row !important;
  justify-content: center;
`;
export const PostColumn = styled(Col)`
  padding-right: 0;
`;
