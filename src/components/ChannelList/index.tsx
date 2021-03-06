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
      <ChannelButton selected channelName="ใ-๐ญ-ใgeral-links-fotos"/>
      <ChannelButton channelName="ใ-๐ฎ-ใfree-games"/>

      <Category>
        <div>
          <ExpandIcon/>
          <span>Music</span>
        </div>
        <div>
          <AddCategoryIcon title="Criar canal"/>
        </div>
      </Category>
      <ChannelButton channelName="ใ-๐ต-ใpeรงa-sua-mรบsica"/>

      <Category>
        <div>
          <ExpandIcon/>
          <span>Salas</span>
        </div>
        <div>
          <AddCategoryIcon title="Criar canal"/>
        </div>
      </Category>
      <ChannelButton room channelName="To Fazendo Nada Nรฉ๐ค"/>
      <ChannelButton room channelName="Warzone ๐"/>
      <ChannelButton room channelName="Counter-Strike ๐ซ"/>
      <ChannelButton room channelName="Duo ๐ง๐ง"/>
      <ChannelButton room channelName="Trio ๐ง๐ง๐ง"/>
      <ChannelButton room channelName="Squad ๐ง๐ง๐ง๐ง"/>
      <ChannelButton room channelName="Free Fire ๐ณ"/>
      <ChannelButton room channelName="FIFA โฝ"/>
      <ChannelButton room channelName="Gartic ๐จ"/>
      <ChannelButton room channelName="Ausente โ"/>
    </Container>
  )
}
export default ChannelList