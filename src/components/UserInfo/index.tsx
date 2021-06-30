import React, { useState } from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles'
import ProfilePicture from '../../assets/profile.jpg'

const UserInfo: React.FC = () => {

  const [unMute, setMute]=useState(false)
  const [unMuteSom, setMuteSom]=useState(false)
  
  return (
    <Container>
      <Profile>
        <Avatar>
          <img src={ProfilePicture} alt="Foto de perfil" />
        </Avatar>
        <UserData>
          <strong title="Copiar nome de usuário">Matheus Ferreira</strong>
          <span>#4133</span>
        </UserData>
      </Profile>

      <Icons>
        <div className="container-mic" onClick={() => setMute(!unMute)}>
          <MicIcon title="Desativar microfone" />
          <div className={unMute ? 'muteMic' : ''}></div>
        </div>

        <div className="container-mic" onClick={() => setMuteSom(!unMuteSom)}>
          <HeadphoneIcon title="Desativar áudio" />
          <div className={unMuteSom ? 'muteMic' : ''}></div>
        </div>

        <div className="container-mic" >
          <SettingsIcon title="Configurações de usuário"/>
          <div ></div>
        </div>

      </Icons>
    </Container>
  )
}
export default UserInfo