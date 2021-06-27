import React from 'react'
import Button from './styles'

import Logo from '../../assets/discord.svg'

export interface Props{
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  image?: string;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions, 
  image
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome ? <img src={Logo} /> : <img src={image} className={selected ? 'active' : ''} /> }
    </Button>
  )
}

export default ServerButton