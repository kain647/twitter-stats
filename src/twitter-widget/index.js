import React from "react";
import {
  Container,
  WidgetContainer,
  IconContainer,
  Icon,
  Title,
  Subtitle,
  TextContainer
} from "./styled";

const images = [
  "https://ic.pics.livejournal.com/tver777/45283501/3887/3887_original.png",
  "https://www.seaicons.com/wp-content/uploads/2016/05/Misc-RSS-icon.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/1024px-Circle-icons-mail.svg.png"
];

const Widget = props => {
  const items = [
    {
      icon: images[0],
      title: "Follow Us on Twitter",
      subtitle: "261 + Followers"
    },
    {
      icon: images[1],
      title: "Subscribe to our RSS feed",
      subtitle: "13 + Subscribers"
    },
    {
      icon: images[2],
      title: "Subscribe for updates via",
      subtitle: "EMAIL"
    }
  ];
  return (
    <Container>
      {items.map(item => {
        return <Item {...item} />;
      })}
    </Container>
  );
};

const Item = props => {
  const { icon, title, subtitle } = props;
  return (
    <WidgetContainer>
      <IconContainer>
        <Icon icon={icon} />
      </IconContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
    </WidgetContainer>
  );
};

export default Widget;
