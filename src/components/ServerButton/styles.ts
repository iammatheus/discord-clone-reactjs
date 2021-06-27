import styled from "styled-components";

import { Props } from '.'

const Button = styled.button<Props>`
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
      (props.isHome ? '26px' : '100%' && props.mentions ? '20px' : '100%') };
    height: ${props => 
      (props.isHome ? '26px' : '100%' && props.mentions ? '100%' : '100%')};
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
      (props.isHome ? 'var(--discord)' : 'auto')};
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
export default Button;