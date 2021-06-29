import React from 'react';
import { Container, Role, User, Avatar, Online, Absent, Busy } from './styles'

export interface UserProps{
  nickname?: string;
  isBot?: boolean;
  isModerator?: boolean;
  isUbl?: boolean;
  isOnline?: boolean;
  isAbsent?: boolean;
  isBusy?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot,
  isOnline,
  isAbsent,
  isBusy,
  isModerator,
  isUbl
}) => {
  return (
    <User
      nickname={nickname}
      isModerator={isModerator}
      isUbl={isUbl}
      isBot={isBot}
    >
      <Avatar 
        className={isBot ? 'bot' : ''}
        isOnline={isOnline}
        isAbsent={isAbsent}
        isBusy={isBusy}
        />
      {isOnline ? <Online title="Disponível"/> : ''}
      {isAbsent ? <Absent title="Ausente"/> : ''}
      {isBusy ? <Busy title="Não perturbar"/> : ''}

      <strong 
      className={isModerator ? 'moderator' : 
      isUbl ? 'ubl' : isBot ? 'bot' : ''}>{nickname} </strong>
      
      
      {isBot && <span>Bot</span>}
    </User>
  )
}
const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Moderador — 2</Role>
        <UserRow nickname="Camisa10 / daNIGHT" isAbsent isModerator/>
        <UserRow nickname="Matheus Ferreira" isOnline isModerator/>

      <Role>Bot's — 1</Role>
        <UserRow nickname="Jukebox" isBot isOnline/>

      <Role>UBL — 1</Role>
        <UserRow nickname="Matue" isAbsent isUbl/>

      <Role>Disponível — 1</Role>
        <UserRow nickname="Assassinsplay" isBusy/>
        <UserRow nickname="br daniel" isAbsent/>
        <UserRow nickname="Dark" isBusy/>
        <UserRow nickname="euqirne" isOnline/>
        <UserRow nickname="Faria" isAbsent/>

      <Role>Offline — 18</Role>
        {Array.from(Array(18).keys()).map((index) => (
          <UserRow nickname="Fulano" key={index}/>
        ))}
    </Container>
  )
}
export default UserList