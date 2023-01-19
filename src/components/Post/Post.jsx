import React from "react";
import { Col } from "react-bootstrap";
import {
  PostContainer,
  PostDescriptionContainer,
  PostImage,
  PostRowContainer,
  PostRow,
  PostColumn,
  DescriptionTitle,
  DescriptionImage,
  IconContainer,
  IconNumber,
  IconTitle,
  IconSympole,
} from "./Post.Style";
import { FaHandsHelping } from "react-icons/fa";
import {
  HiOutlineGift,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
} from "react-icons/hi";
import "./Style.css";

const Title = () => {
  return (
    <div className="TitleDiv">
      <h1 className="firstTitle">
        Over 1,300 Virtual Malls Work on CS-Cart Multi-Vendor and Some Are Truly
        Huge
      </h1>
    </div>
  );
};
const IconRender = () => {
  return (
    <div>
      <PostRow>
        <Icon
          number="1,000"
          text="employees"
          sympole={<HiOutlineUserGroup size={55} />}
        />
        <Icon
          number="500,000"
          text="merchants"
          sympole={<FaHandsHelping size={55} />}
        />
        <Icon
          number="53,000,000"
          text="SKUs"
          sympole={<HiOutlineGift size={55} />}
        />
        <Icon
          number="30,000"
          text="locations"
          sympole={<HiOutlineLocationMarker size={55} />}
        />
      </PostRow>
    </div>
  );
};
const Icon = ({ number, text, sympole }) => {
  return (
    <IconContainer>
      <IconSympole>{sympole}</IconSympole>
      <IconNumber> {number}</IconNumber>
      <IconTitle>{text} </IconTitle>
    </IconContainer>
  );
};

const ImageRender = () => {
  return (
    <Col>
      <div>
        <PostImage src="https://www.cs-cart.com/design/themes/cs-cart.com/media/images/addons/static_pages/homepage2018/home-case.jpg" />
      </div>
    </Col>
  );
};
const DescriptionRender = () => {
  return (
    <PostDescriptionContainer>
      <DescriptionImage src="https://www.cs-cart.com/design/themes/cs-cart.com/media/images/addons/static_pages/homepage2018/home-case__logo.svg" />

      <DescriptionTitle>
        ShopClues is one of the largest online marketplaces in the world. It has
        millions of products, multiple mentions in mass media, and a bunch of
        awards. And it works on the CS-Cart marketplace website builder.
      </DescriptionTitle>

      <IconRender />
    </PostDescriptionContainer>
  );
};
export const Post = () => {
  return (
    <div className="Post">
      <PostContainer>
        <Title />
        <PostRowContainer>
          <PostRow>
            <ImageRender />
            <PostColumn>
              <DescriptionRender />
            </PostColumn>
          </PostRow>
        </PostRowContainer>
      </PostContainer>
    </div>
  );
};
export default Post;
