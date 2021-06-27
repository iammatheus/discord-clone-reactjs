import styled from "styled-components";
import { ExpandMore } from 'styled-icons/material'

export const Container = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 11px 0 16px;
  background-color: var(--secondary);
  box-shadow: rgba(0, 0, 0, .2) 0 1px 0 0;
  z-index: 2;

  cursor: pointer;

  transition: background-color .2s;
  &:hover{
    background-color: #34373c;
  }
`

export const Title = styled.h1 `
  font-size: 15px;
  font-weight: bold;
  color: var(--white);
`

export const ExpandIcon = styled(ExpandMore) `
  width: 24px;
  height: 24px;

  color: var(--white);
  cursor: pointer;
`