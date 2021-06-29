import styled from "styled-components";

import { Add } from '@styled-icons/fluentui-system-filled'
import { Compass } from '@styled-icons/ionicons-sharp'

import { Props } from '.'

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  
  margin-bottom: 8px;

  background-color: #36393f;

  position: relative;
  cursor: pointer;

  transition: border-radius .2s, background-color .2s;
  
  background-color: ${props => 
      (props.mentions ? 'var(--rocketseat)' : 'auto')};
  
  > img {
    width: ${props => 
      (props.isHome ? '26px' : '48px' && props.mentions ? '20px' : '48px') };
    height: ${props => 
      (props.isHome ? '26px' : '48px' && props.mentions ? '48px' : props.isServerAdd || props.isExplorerServer ? '' : '48px')};
    border-radius: 50%; 
    
    transition: border-radius .2s;
    &.active,
    &:hover{
      border-radius: 16px;
    }    
  }
  &:hover{
    border-radius: 16px;
    background-color: ${props => 
      (props.isHome ? 'var(--discord)' : props.isServerAdd || props.isExplorerServer ? '#3ba55d' : 'auto')};

      > .btn-server{
        color: var(--white);
      }
  }

  &::before{
    transition: height .2s, opacity .2s;
    content: '';
    display: inline;

    width: 9px;
    height: 9px;
    
    position: absolute;
    left: -17px;

    background-color: var(--white);
    border-radius: 50%;
    opacity: ${props => 
      (props.hasNotifications ? '1' : '0')};
  }
  &:hover::before{
    display: inline;
    height: 22px;
    border-radius: 5px;
    opacity: 1;
  }
  &.active::before{
    display: inline;
    height: 40px;
    border-radius: 5px;
    opacity: 1;
  }

  &::after{
    content: '${props => props.mentions && props.mentions}';
    
    display: ${props => 
      props.mentions && props.mentions > 0 ? 'inline' : 'none'};

    width: auto;
    height: 16px;
    padding: 0 4px;

    background-color: var(--notification);

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    text-align: right;
  }
`

export const AddServer = styled(Add)`
  position: absolute;
  width: 25px;
  height: 25px;
  color: #3ba55d;

  transition: color .2s;
`

export const ExplorerServer = styled(Compass)`
  position: absolute;

  width: 25px;
  height: 25px;
  
  color: #3ba55d;
  border-radius: 50%;

  transition: color .2s;
`