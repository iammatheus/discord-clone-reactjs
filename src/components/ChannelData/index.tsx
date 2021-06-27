import React, { useRef, useEffect } from 'react';
import { 
    Container, Messages, InputWrapper, Input, InputIcon, 
    GiftIcon, GifIcon, FigIcon, EmojiIcon } from './styles'

import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current
    if(div){
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Matheus Ferreira"
          date="23/06/2021"
          content="Testando Mensagem"
        />

        <ChannelMessage
          author="BlindaoFire"
          date="23/06/2021"
          content={
            <>
              <Mention>@Matheus Ferreira</Mention>, testando menção
            </>
          }
          hasMention
        />

        {Array.from(Array(20).keys()).map((index) => (
          <ChannelMessage
            key={index}
            author="Fulano"
            date="23/06/2021"
            content="Mensagem de teste"
          />
        ))}
        
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #「-💭-」geral-links-fotos"/>
        
        <div className="iconsContainer">
          <InputIcon/>
          
          <div className="right">
            <GiftIcon className="rightIcons" title="Reforce os parças! Dê vantagens super bacanas de bate-papo com o Nitro."/>
            <GifIcon className="rightIcons"/>
            <FigIcon className="rightIcons"/>
            <EmojiIcon className="rightIcons"/>
          </div>
        </div>
      </InputWrapper>

    </Container>
  )
}
export default ChannelData