import React from 'react';

import { Container, VolumeIcon, InviteIcon, SettingsIcon, HashtagIcon } from './styles'

export interface Props {
  channelName: string;
  selected?: boolean;
  room?: boolean;
}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected,
  room
}) => {
    return (
      <Container className={selected ? 'active' : ''}>
        <div>
          { room ? <VolumeIcon /> : <HashtagIcon /> }
          <span>{channelName}</span>
        </div>

        <div className="icons">
          <InviteIcon title="Criar convite"/>
          <SettingsIcon title="Editar canal"/>
        </div>
      </Container>
    )
}
export default ChannelButton