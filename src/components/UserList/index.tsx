import React from 'react';

import MatheusImage from '../../assets/matheus.png'
import Camisa10Image from '../../assets/danight.png'
import BlindaoImage from '../../assets/blindao.png'
import NatanImage from '../../assets/natanziin.png'
import DarkImage from '../../assets/dark.png'
import DanImage from '../../assets/dan.png'
import MatueImage from '../../assets/matue.png'
import BotImage from '../../assets/bot.png'
import MalvadoFPS from '../../assets/malvadofps.png'
import StandardImage from '../../assets/discord.svg'

import { Container, Role, User, Avatar, Online, Absent, Busy } from './styles'

export interface UserProps{
  nickname?: string;
  isBot?: boolean;
  isMaster?: boolean;
  isModerator?: boolean;
  isUbl?: boolean;
  isOnline?: boolean;
  isOffline?: boolean;
  isAbsent?: boolean;
  isBusy?: boolean;
  isUser?: boolean;
  isImage?: boolean;
  image?: string;
  activities?: string;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot,
  isOnline,
  isOffline,
  isAbsent,
  isBusy,
  isMaster,
  isModerator,
  isUbl,
  isUser,
  isImage,
  image,
  activities
}) => {
  return (
    <User
      nickname={nickname}
      isMaster={isMaster}
      isModerator={isModerator}
      isUbl={isUbl}
      isBot={isBot}
      isUser={isUser}
      isImage={isImage}
      activities={activities}
      isOffline={isOffline}
    >
      <div>
        <Avatar 
          className={isBot ? 'bot' : ''}
          isOnline={isOnline}
          isAbsent={isAbsent}
          isBusy={isBusy}
          isUser={isUser}
          isImage={isImage}
          image={image}
          >
            {isImage ? <img src={image} alt="Foto de perfil"/> : <img src={StandardImage} className="standardImage" alt="Foto de perfil"/>}
        </Avatar>

        {isOnline ? <Online activities={activities} title="Disponível"/> : ''}
        {isAbsent ? <Absent activities={activities} title="Ausente"/> : ''}
        {isBusy ? <Busy activities={activities} title="Não perturbar"/> : ''}

        <strong 
        className={isMaster ? 'master' : isModerator ? 'moderator' : 
        isUbl ? 'ubl' : isBot ? 'bot' : ''}>{nickname} </strong>
        
        {isBot && <span>Bot</span>}
      </div>
      <span title={activities}>Jogando <b>{activities}</b></span>
    </User>
  )
}
const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Moderador — 3</Role>
        <UserRow nickname="Camisa10 / daNIGHT" isAbsent isModerator isImage image={Camisa10Image} activities="Call of Duty: Modern Warfare"/>
        <UserRow nickname="Matheus Ferreira" isOnline isModerator isImage image={MatheusImage} activities="Visual Studio Code"/>
        <UserRow nickname="MalvadoFPS" isOnline isModerator isImage image={MalvadoFPS} activities="Counter-Strike: Global Offensive"/>
        
      <Role>Master — 1</Role>
        <UserRow nickname="BlindaoFire" isOnline isMaster isImage image={BlindaoImage}/>

      <Role>Bot's — 1</Role>
        <UserRow nickname="Jukebox" isBot isOnline isImage image={BotImage}/>

      <Role>UBL — 2</Role>
        <UserRow nickname="Matue" isOnline isUbl isImage image={MatueImage}/>
        <UserRow nickname="Natanziin" isAbsent isUbl isImage image={NatanImage} activities="Free Fire"/>

      <Role>Disponível — 4</Role>
        <UserRow nickname="br daniel" isAbsent isImage image={StandardImage} isUser/>
        <UserRow nickname="Dark" isBusy isImage image={DarkImage}/>
        <UserRow nickname="euqirnE" isOnline isImage image={StandardImage} isUser/>
        <UserRow nickname="daN" isBusy isImage image={DanImage}/>

      <Role>Offline — 20</Role>
        {Array.from(Array(20).keys()).map((index) => (
          <UserRow nickname="Fulano" key={index} isOffline/>
        ))}
    </Container>
  )
}
export default UserList