import React from "react";
import { Row, Col } from "react-bootstrap";
import { leftCard } from "./config";
import {
  CardDescription,
  CardImage,
  CardImgeContainer,
  CardTitle,
  Column,
  FeatureCardContainer,
  FeatureContainer,
  FeatureTitle,
  FeatureTitleContainer,
  Link,
  ListRow,
  More,
} from "./Feature.style";
const TitleRender = () => {
  return (
    <FeatureTitleContainer>
      <FeatureTitle>
        Features That Make CS-Cart Multi-Vendor the Killer Marketplace Software
      </FeatureTitle>
    </FeatureTitleContainer>
  );
};
const Card = ({ img, title, description, link }) => {
  return (
    <FeatureCardContainer>
      <Row>
        <CardImgeContainer>
          <CardImage src={img} />
        </CardImgeContainer>
        <Col>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {description}
            <More href={link}>More</More>
          </CardDescription>
        </Col>
      </Row>
    </FeatureCardContainer>
  );
};
const CardList = () => {
  return (
    <ListRow>
      <Column>
        {leftCard.map((e) => (
          <Card
            title={e.title}
            description={e.discription}
            Link={e.link}
            img={e.img}
          />
        ))}
      </Column>

      <Column>
        {" "}
        {leftCard.map((e) => (
          <Card
            title={e.title}
            description={e.discription}
            Link={e.link}
            img={e.img}
          />
        ))}
      </Column>
    </ListRow>
  );
};
const Feature = () => {
  return (
    <FeatureContainer>
      <TitleRender />
      <CardList />
    </FeatureContainer>
  );
};

export default Feature;
