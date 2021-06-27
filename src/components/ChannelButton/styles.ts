import styled from "styled-components";

import { VolumeUp } from "styled-icons/material-sharp";
import { Hashtag } from 'styled-icons/heroicons-outline'
import { PersonAddAlt1, Settings } from "styled-icons/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  font-size: 15px;

  padding: 7px 8px;
  margin: 1px 0;
  border-radius: 5px;

  background-color: transparent;
  cursor: pointer;
  
  > div {
    display: flex;
    align-items: center;
  }
  > div span {
    margin-left: 5px;
    color: var(--senary);

    
  }
  > .icons{
    display: none;
  }

  transition: background-color .1s;
  &:hover, 
  &.active{
    background-color: #393c4390;
    > div span {
      color: var(--white);

      max-width: 135px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    > .icons{
      display: flex;
    }
  }
  &.active{
    background-color: var(--quinary);
  }
`

export const VolumeIcon = styled(VolumeUp)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`
export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`

export const InviteIcon = styled(PersonAddAlt1)`
  width: 15px;
  height: 15px;
  color: #b9bbbe;

  transition: color .1s;
  
  &:hover{
    color: #dbdbdb;
  }

  cursor: pointer;
`

export const SettingsIcon = styled(Settings)`
  width: 15px;
  height: 15px;
  margin-left: 4px;

  color: #b9bbbe;
  transition: color .2s;
  &:hover{
    color: #cdcecf;
  }

  cursor: pointer;
`
