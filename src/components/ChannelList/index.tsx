import React from 'react';

import ChannelButton from '../ChannelButton'
import { Container, Category, AddCategoryIcon, ExpandIcon } from './styles'

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <div>
          <ExpandIcon/>
          <span>Channels</span>
        </div>
        <div>
          <AddCategoryIcon title="Criar canal"/>
        </div>
      </Category>
      <ChannelButton selected channelName="「-💭-」geral-links-fotos"/>
      <ChannelButton channelName="「-🎮-」free-games"/>

      <Category>
        <div>
          <ExpandIcon/>
          <span>Music</span>
        </div>
        <div>
          <AddCategoryIcon title="Criar canal"/>
        </div>
      </Category>
      <ChannelButton channelName="「-🎵-」peça-sua-música"/>

      <Category>
        <div>
          <ExpandIcon/>
          <span>Salas</span>
        </div>
        <div>
          <AddCategoryIcon title="Criar canal"/>
        </div>
      </Category>
      <ChannelButton room channelName="To Fazendo Nada Né💤"/>
      <ChannelButton room channelName="Warzone 🎇"/>
      <ChannelButton room channelName="Counter-Strike 🔫"/>
      <ChannelButton room channelName="Duo 🧍🧍"/>
      <ChannelButton room channelName="Trio 🧍🧍🧍"/>
      <ChannelButton room channelName="Squad 🧍🧍🧍🧍"/>
      <ChannelButton room channelName="Free Fire 📳"/>
      <ChannelButton room channelName="FIFA ⚽"/>
      <ChannelButton room channelName="Gartic 🎨"/>
      <ChannelButton room channelName="Ausente ❌"/>
    </Container>
  )
}
export default ChannelList