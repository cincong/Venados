import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css';
import "react-table/react-table.css";
import { Card } from 'antd';


const VenadosPlayers = ({ name, first, second, position, number, image, birthday }) => ( 

<Card title= {name} extra={<a href="#">More</a>} style={{ width: 300}}>
  <img style={{ width: 100, height:130}} src={image} alt={name}/>
  <p>Posición:{position}</p>
  <p>Número: {number}</p>
  <p>Cumpleaños:{birthday}</p>
  
</Card>

 
)

VenadosPlayers.propTypes = {
  name: PropTypes.string.isRequired,
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}



export default VenadosPlayers;




