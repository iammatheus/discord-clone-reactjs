import styled from "styled-components";
// import {AlternateEmail} from 'styled-icons/material'
import { AddCircle } from 'styled-icons/fluentui-system-filled'
import { Gift } from 'styled-icons/fa-solid'
import { Gif } from 'styled-icons/fluentui-system-filled'
import { Emoji } from 'styled-icons/fluentui-system-filled'
import { Googlesheets } from 'styled-icons/simple-icons'

export const Container = styled.div `
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`

export const Messages = styled.div `
  max-height: calc(100vh - 46px - 68px);
  padding: 20px 0;
  
  overflow-y: auto;
  ::-webkit-scrollbar{
    width: 8px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track{
    background-color: var(--secondary);
  }

  display: flex;
  flex-direction: column;
`

export const InputWrapper = styled.div `
  width: 100%;
  padding: 0 16px;

  > ::placeholder{
    max-width: 125px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > .iconsContainer{
    position: relative;
    bottom: 34px;
    left: 15px;
    display: flex;
    justify-content: space-between;
    
    > .right{
      margin: 0 25px;

      > .rightIcons{
        margin: 0 8px;

        &:hover{
          color: #dcddde;
        }
      }
    }
  }
`

export const Input = styled.input `
  width: 100%;
  height: 44px;
  font-size: 15px;
  color: var(--senary);

  padding: 0 10px 0 57px;
  border-radius: 7px;

  background-color: var(--chat-input);

  position: relative;

  &::placeholder{
    color: #82838690;
  }
  
  /* ~ svg{
    position: relative;
    bottom: 34px;
    left: 15px;
  }
  ~ div{
    display: flex;
    justify-content: left;
  } */
`

export const InputIcon = styled(AddCircle) `
  width: 24px;
  height: 24px;
  color: #b9bbbe;

  cursor: pointer;

  &:hover{
    color: #dcddde;
  }
`

export const GiftIcon = styled(Gift) `
  width: 24px;
  height: 24px;
  color: #b9bbbe;
  cursor: pointer;
  left: 50px;
`

export const GifIcon = styled(Gif) `
  width: 24px;
  height: 24px;
  color: #b9bbbe;
  cursor: pointer;
`

export const FigIcon = styled(Googlesheets) `
  width: 24px;
  height: 24px;
  color: #b9bbbe;
  cursor: pointer;
`

  
export const EmojiIcon = styled(Emoji) `
  width: 24px;
  height: 24px;
  color: #b9bbbe;
  cursor: pointer;
  &:hover{
    fill: #ffcc4d;
  }
`
