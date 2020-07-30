// import React from 'react';

// const Header = () => (
//   <div>
//     <img src="https://i.imgur.com/Od3GYER.jpg" alt="EventPlanner" id="header"/>
//   </div>
// );

// export default Header;
import React from 'react'
import { Header, Image } from 'semantic-ui-react'

const HeaderImg = () => (
  <Header as='h2'>
    <Image circular src="https://i.imgur.com/Od3GYER.jpg" alt="EventPlanner" id="header"/>
    {/* <Image circular src='/images/avatar/large/patrick.png' /> Patrick */}
  </Header>
)

export default HeaderImg
