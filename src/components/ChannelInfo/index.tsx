import React from 'react';
import { Container, HashtagIcon, Title, InfoWrapper, FunctionsChannel, 
          BellIcon, PinIcon, Search, UsersIcon, InboxIcon, QuestionIcon, SearchIcon } from './styles'

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <InfoWrapper>
        <HashtagIcon/>
        <Title>「-💭-」geral-links-fotos</Title>
      </InfoWrapper>

      <FunctionsChannel>
        <BellIcon className="functionsIcon"/>
        <PinIcon className="functionsIcon"/>
        <UsersIcon className="functionsIcon"/>

        <div className="container-search">
          <Search className="functionsIcon" placeholder="Buscar"/>
          <SearchIcon/>
        </div>
        
        <InboxIcon className="functionsIcon"/>
        <QuestionIcon className="functionsIcon"/>
      </FunctionsChannel>
      
    </Container>
  )
}
export default ChannelInfo