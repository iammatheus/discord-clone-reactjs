import styled from "styled-components";

import { Hashtag } from 'styled-icons/heroicons-outline'
import { BellFill } from '@styled-icons/octicons'
import { PinAngleFill } from '@styled-icons/bootstrap'
import { Group } from '@styled-icons/material-rounded'
import { Inbox } from '@styled-icons/material'
import { Question } from '@styled-icons/remix-fill'
import { MagnifyingGlass } from '@styled-icons/entypo'

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 17px;
  background-color: var(--primary);
  box-shadow: rgba(0,0,0,.2) 0 1px 0 0;

  z-index: 2;
`

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
`

export const Title = styled.h2`
  margin-left: 9px;

  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const FunctionsChannel = styled.div`
  display: flex;
  align-items: center;
  > .functionsIcon{
    width: 24px;
    height: 24px;
    margin: 0 8px;

    color: #b9bbbe;
    cursor: pointer;

    transition: color .1s;
    &:hover{
      color: #dcddde !important;
    }
  }
  > .container-search{
    margin: 0 8px;
    position: relative;  
    height: 24px;
    
  }
`
export const BellIcon = styled(BellFill)`
  
`
export const PinIcon = styled(PinAngleFill)`
  
`
export const UsersIcon = styled(Group)`
  color: var(--white) !important;
`
export const InboxIcon = styled(Inbox)`
  
`
export const QuestionIcon = styled(Question)`
  
`
export const Search = styled.input`
  width: 140px !important;
  height: 24px !important;
  padding: 0 5px;

  border-radius: 5px;

  font-weight: light;
  color: white;
  background-color: var(--tertiary);
  cursor: auto !important;

  &.size{
    width: 240px !important;      
  }
`

export const SearchIcon = styled(MagnifyingGlass)`
  width: 17px;
  height: 17px;

  color: #b9bbbe;
  opacity: .5;

  position: absolute;
  right: 4px;
  top: 3px;
`
