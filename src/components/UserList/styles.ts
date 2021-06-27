import styled from "styled-components";

import { UserProps } from '.'

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
  align-items: center;

  margin-top: 5px;
  padding: 5px;
  border-radius: 4px;

  background-color: transparent;
  transition: .1s;

  > strong{
    margin-left: 13px;
    color: var(--gray);
    font-weight: 400;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

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
  &:hover{
    background-color: #34373c;
    > strong{
      color: ${props => 
      (props.isModerator ? 'auto' : props.isUbl ? 'auto' : props.isBot ? 'auto' : '#fff')};
    }
  }
  
  > span {
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;

    color: var(--white);
    background-color: var(--discord);

    margin-left: 9px;
    padding: 4px 5px;

    border-radius: 4px;
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

  &::after{
    content: '';

    width: 10px;
    height: 10px;

    position: absolute;
    bottom: -2px;
    right: -4px;

    border-radius: 50%;
    border: 3px solid var(--quaternary);

    cursor: pointer;

    display: ${props => 
      (props.isOnline || 
      props.isAbsent || 
      props.isBusy  ? 'inline' : 'none')};

    background-color: ${props => 
      (props.isOnline ? '#3ba55d' : 
      props.isAbsent ? '#faa81a' : 
      props.isBusy ? '#ed4245' : 'none')};
  }

  &.bot{
    background-color: var(--mention-detail);
  }
`
