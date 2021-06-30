import React from 'react';

import StandardImage from '../../assets/discord.svg'

import { Container, Avatar, Message, Header, Content, 
        ActionContainer, Reaction, Answer, More} from './styles'

export { Mention}  from './styles'


export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  isBot?: boolean;
  image?: string;
  isImage?: boolean;
  isMaster?: boolean;
  isModerator?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  isBot,
  image,
  isImage,
  isMaster,
  isModerator
}) => {
  return (
    <Container>
      <div>
        <Avatar className={isBot ? 'bot' : ''} >
          {isImage ? <img src={image} className="image" alt="Foto de perfil"/> : <img src={StandardImage} className="standardImage" alt="Foto de perfil"/>}
        </Avatar>
        
        <Message>
          <Header>
            <strong className={isMaster ? 'master' : isModerator ? 'moderator' : ''}>{author}</strong>
            {isBot && <span>Bot</span>}
            <time>{date}</time>
          </Header>
          <Content>{content}</Content>
        </Message>
      </div>

      <ActionContainer className="action-container">
        <Reaction/>
        <Answer/>
        <More/>
      </ActionContainer>

    </Container>
  )
}
export default ChannelMessage