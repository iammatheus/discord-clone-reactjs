import styled from "styled-components";

import { AddReaction } from '@styled-icons/material'
import { ArrowBack } from '@styled-icons/typicons'
import { EllipsisHorizontal } from '@styled-icons/ionicons-solid'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 4px 16px;
  margin-right: 4px;

  background-color: transparent;

  > div{
    display: flex;
  }

  &.mention{
    border-left: 2px solid var(--mention-detail);
    padding-left: 14px;
  }
  & + div {
    margin-top: 13px;
  }
  &:hover{
    background-color: #32353b;
    > .action-container {
      opacity: 1;
    }
  }
  
`

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  background-color: var(--secondary);
  border-radius: 50%;

  &.bot{
    background-color: var(--mention-detail);
  }
`

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 17px;
  min-height: 40px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong{
    color: var(--white);
  }
  > span {
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;

    color: var(--white);
    background-color: var(--discord);

    margin-left: 6px;
    padding: 4px 5px;

    border-radius: 4px;
  }
  > time {
    margin-left: 6px;
    color: var(--gray);
    font-size: 13px;
  } 
`

export const Content = styled.div`
  text-align: left;
  color: var(--white);
`

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
`

export const ActionContainer = styled.div`
  opacity: 0;
  position: absolute;
  right: 15px;
  top: -15px;

  border: .5px solid #2f3237;
  border-radius: 2px;

  cursor: pointer;
  background-color: #36393f;

  transition: box-shadow .2s;

  &:hover{
    box-shadow: 0px 3px 3px rgba(0,0,0,.2);
  }
`

export const Reaction = styled(AddReaction)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  color: #b9bbbe;
  background-color: #36393f;
  padding: 0 4px;
  border-radius: 2px 0px 0px 2px;

  &:hover{
    color: #dcddde;
    background-color: #3a3e44;
  }

`

export const Answer = styled(ArrowBack)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  color: #b9bbbe;
  background-color: #36393f;
  padding: 0 4px;

  &:hover{
    color: #dcddde;
    background-color: #3a3e44;
  }
`

export const More = styled(EllipsisHorizontal)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  color: #b9bbbe;
  background-color: #36393f;
  padding: 0 4px;
  border-radius: 0px 2px 2px 0px;

  &:hover{
    color: #dcddde;
    background-color: #3a3e44;
  }
`
