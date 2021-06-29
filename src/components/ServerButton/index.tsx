import React from 'react'

import  { Button, AddServer, ExplorerServer } from './styles'

import Logo from '../../assets/discord.svg'

export interface Props{
  selected?: boolean;
  isHome?: boolean;
  isServerAdd?: boolean;
  isExplorerServer?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  image?: string;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  isServerAdd,
  isExplorerServer,
  hasNotifications,
  mentions, 
  image
}) => {
  return (
    <Button
      isHome={isHome}
      isServerAdd={isServerAdd}
      isExplorerServer={isExplorerServer}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      { isHome ? <img src={Logo} /> : <img src={image} className={selected ? 'active' : ''} /> }
      { isServerAdd ? <AddServer className="btn-server" /> : isExplorerServer ? <ExplorerServer className="btn-server"/> : '' }
    </Button>
  )
}

export default ServerButton