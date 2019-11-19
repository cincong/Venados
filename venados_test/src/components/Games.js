import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd';
import { Icon } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}



const Games = ({image, away, home, opponent,date}) => (



  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="COPA MX" key="1">
    
    <img style={{ width: 50, height:50}} src={image} alt={away}/> 

    <tb style={{ padding :60}}>{away}</tb>

    <Icon type="minus" />

    <tb style={{ padding :60}}>{home}</tb>

    <img style={{ width: 50, height:50}} src='https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10732/10732.png' alt={away}/> 
  
  
    </TabPane>
    <TabPane tab="ASCENSO MX" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="AMISTOSO" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
 
)



Games.propTypes = {
  league: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  away: PropTypes.number.isRequired,
  home: PropTypes.number.isRequired,
  opponent: PropTypes.string.isRequired,
}

export default Games





