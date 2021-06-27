import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  padding: 4px 16px;
  margin-right: 4px;

  background-color: transparent;

  &.mention{
    border-left: 2px solid var(--mention-detail);
    padding-left: 14px;
  }

  & + div {
    margin-top: 13px;
  }
  &:hover{
    background-color: #32353b;
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