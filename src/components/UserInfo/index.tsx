import React from 'react';
import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles'
import perfilPhoto from '../../assets/profile.jpg'

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar>
          <img src={perfilPhoto} alt="Perfil" />
        </Avatar>
        <UserData>
          <strong title="Copiar nome de usuário">Matheus Ferreira Siqueira</strong>
          <span>#4133</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon title="Desativar microfone"/>
        <HeadphoneIcon title="Desativar áudio"/>
        <SettingsIcon title="Configurações de usuário"/>
      </Icons>
    </Container>
  )
}
export default UserInfo