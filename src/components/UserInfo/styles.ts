import styled from "styled-components";
import { Mic, Headset, Settings } from 'styled-icons/material'

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0,0,0,.2) 0 1px 0 0;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.div`
  > img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
  }
  position: relative;

  &::after{
    content: '';
    
    display: inline;

    width: 10px;
    height: 10px;

    background-color: #3ba55d;

    position: absolute;
    bottom: 2px;
    right: -4px;

    border-radius: 50%;
    border: 3px solid var(--quaternary);

    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    text-align: right;
    
    cursor: pointer;
  }
  
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 8px;

  > strong {
    display: block;

    font-size: 14px;
    color: var(--white);
    
    max-width: 85px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  > span {
    font-size: 13px;
    color: var(--gray);
  }
  cursor: pointer;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > div:not(:first-child){
    margin-left: 9px;
  }
  
  position: relative;
  
  > .container-mic{
    position: relative;

    > .muteMic{
      position: absolute;
      left: 9px;
      top: 0;

      width: 4px;
      height: 22px;

      background-color: #ed4245;
      border: 1px solid var(--quaternary);
      border-radius: 4px;

      transform: rotate(40deg);

      cursor: pointer;
    }
  }

  
`

export const MicIcon = styled(Mic)`
  width: 22px;
  height: 22px;
  
  color: var(--white);
  opacity: .7;
  cursor: pointer;

  transition: opacity .1s;

  &:hover{
    opacity: .8;
  }
`

export const HeadphoneIcon = styled(Headset)`
  width: 22px;
  height: 22px;

  color: var(--white);
  opacity: .7;
  cursor: pointer;

  transition: opacity .1s;
  &:hover{
    opacity: .8;
  }

  position: relative;
`

export const SettingsIcon = styled(Settings)`
  width: 22px;
  height: 22px;

  color: var(--white);
  opacity: .7;
  cursor: pointer;

  transition: opacity .1s;
  &:hover{
    opacity: .8;
  }
`
