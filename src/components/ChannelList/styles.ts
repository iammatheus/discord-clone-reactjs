import styled from "styled-components";
import { Add, ExpandMore } from 'styled-icons/material'


export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 0 8px;
  background-color: var(--secondary);

  overflow-y: auto;
  ::-webkit-scrollbar{
    width: 4px;
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track{
    background-color: var(--secondary);
  }
  &:hover{
    overflow-y: auto;
     ::-webkit-scrollbar-thumb{
      background-color: var(--tertiary);
    }
     ::-webkit-scrollbar-track{
      background-color: var(--secondary);
    }
  }
` 

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 15px;

  > div > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
` 

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;

  color: var(--symbol);
  cursor: pointer;
  margin-right: 5px;

  transition: color .05s;
  &:hover{
    color: #d6d7d8;
  }
` 

export const ExpandIcon = styled(ExpandMore)`
  width: 13px;
  height: 13px;
  color: var(--senary);
  margin-right: 2px;
`