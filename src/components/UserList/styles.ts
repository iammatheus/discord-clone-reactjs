import styled from "styled-components";

import { UserProps } from '.'
import { WeatherMoon } from '@styled-icons/fluentui-system-filled'
import { DotFill } from '@styled-icons/octicons' 
import { DashCircleFill } from '@styled-icons/bootstrap'

export const Container = styled.div `
  grid-area: UL;
  max-height: calc(100vh - 46px);

  display: flex;
  flex-direction: column;

  padding: 3px 10px 0;
  background-color: var(--secondary);

  margin-left: 3px;
  
  overflow-y: auto;

  ::-webkit-scrollbar{
    width: 4px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track{
    background-color: var(--secondary);
  }
`
export const Role = styled.div`
  margin-top: 25px;
  
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
  text-transform: uppercase;
`

export const User = styled.div<UserProps>`
  display: flex;
  flex-direction: column;

  position: relative;
  margin-top: 5px;

  > span{
    display: ${props => props.activities ? 'inline' : 'none'};
    
    position: absolute;
    left: 47px;
    bottom: 5px;

    font-size: 11px;
    color: var(--gray);
    
    max-width: 140px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > div {
    display: flex;
    align-items: ${props => props.activities ? 'flex-start' : 'center'};

    padding: 5px;
    border-radius: 4px;

    background-color: transparent;
    transition: .1s;

  }

  > div > strong{
    margin-left: ${props => props.isImage ? '-5px' : '10px'};
    color: var(--gray);
    font-weight: 400;
    font-size: 15px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &.master{
      color: #f1c41a;
    }
    &.moderator{
      color: #21bc9c;
    }
    &.ubl{
      color: #fff;
    }
    &.bot{
      color: #2bb559;
    }
    
  }

  > div > span {
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;

    color: var(--white);
    background-color: var(--discord);

    margin-left: 9px;
    padding: 4px 5px;

    border-radius: 4px;
  }

  &:hover{
    background-color: #34373c;
    > strong{
      color: ${props => 
      (props.isModerator ? 'auto' : props.isUbl ? 'auto' : props.isBot ? 'auto' : '#fff')};
    }
  }
  
  cursor: pointer;
`

export const Avatar = styled.div<UserProps>`
  width: 32px;
  height: 32px;

  background-color: var(--senary);
  border-radius: 50%;
  
  flex-shrink: 0;
  position: relative;

  > img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${props =>  props.isUser ? '#ed4245' : ''};
    padding: ${props =>  props.isUser ? '5px' : ''};

    &.standardImage{
      padding: 5px;
      background-color: #757e8a;
    }
  }

`

export const Absent = styled(WeatherMoon)<UserProps>`
  width: 16px;
  height: 16px;
  padding: 1px;

  position: relative;
  bottom: ${props => props.activities ? '-17px' : '-9px'};
  right: 14px;

  color: #faa81a;
  background-color: var(--quaternary);

  border-radius: 50%;
`
export const Online = styled(DotFill)<UserProps>`
  width: 16px;
  height: 16px;

  position: relative;
  bottom: ${props => props.activities ? '-17px' : '-9px'};
  right: 14px;

  color: #3ba55d;
  background-color: #3ba55d;

  border-radius: 50%;
  border: 3px solid var(--quaternary);
`
export const Busy = styled(DashCircleFill)<UserProps>`
  width: 16px;
  height: 16px;

  position: relative;
  bottom: ${props => props.activities ? '-17px' : '-9px'};
  right: 14px;

  color: #ed4245;
  background-color: var(--quaternary);

  border-radius: 50%;
  border: 3px solid var(--quaternary);
`