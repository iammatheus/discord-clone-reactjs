import React from 'react'

import ServerButton from '../ServerButton'
import { Container, Separator } from './styles'

import Quasar from '../../assets/quasar.jpg'
import TheCrazy from '../../assets/the_crazy.jpg'
import PayDayMask from '../../assets/payday_mask.png'
import Sapo from '../../assets/sapo.jpg'
import Rocketseat from '../../assets/rocketseat.svg'
import Umbrella from '../../assets/umbrella.png'

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>
      <Separator/>
      <ServerButton image={Quasar}/>
      <ServerButton image={TheCrazy} hasNotifications/>
      <ServerButton image={PayDayMask} />
      <ServerButton image={Sapo} />
      <ServerButton image={Rocketseat} hasNotifications mentions={28} />
      <ServerButton image={Umbrella} selected/>

      <ServerButton isServerAdd />
      <ServerButton isExplorerServer />
    </Container>
  )
}

export default ServerList