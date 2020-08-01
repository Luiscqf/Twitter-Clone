import React from 'react';

import {
    Container, 
    Retweeted, 
    RocketseatIcon, 
    Body, 
    Avatar, 
    Content, 
    Header,
    Dot,
    Description, 
    ImageContent, 
    Icons, 
    Status, 
    CommentIcon, 
    RetweetIcon, 
    LikeIcon 
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <RocketseatIcon />
            Você retweetou
        </Retweeted>
        <Body>
            <Avatar />
            <Content>
                <Header>
                    <strong>Luis Claudio</strong>
                    <span>@Claudio10luis</span>
                    <Dot />
                    <time>31 de Jul</time>
                </Header>
                <Description>Foguete não tem ré</Description>
                <ImageContent />
                <Icons>
                    <Status>
                        <CommentIcon />
                        18
                    </Status>
                    <Status>
                        <RetweetIcon />
                        3
                    </Status>
                    <Status>
                        <LikeIcon />
                        123
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>
  );
}

export default Tweet;