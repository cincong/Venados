import React from 'react'
import VenadosPlayers from '../../VenadosPlayers'



  class Players extends React.Component {

  constructor (props){
    super(props)
  

    this.state = {
      players: {},
      playersCenters: {},
      playersGoal:{},
      playersForwards:{},
      isFetch: true,
   
    }
  }
  
  componentDidMount(){
    const uri = 'https://cors-anywhere.herokuapp.com/https://venados.dacodes.mx/api/players';

    let h = new Headers();
    h.append('Accept','application/json');

    let req = new Request(uri, {
      method: 'GET',
      headers: h,
      mode:'cors'
    });

    fetch(req)
    .then(responser => responser.json())
    .then(playersJson => this.setState({ 
      players: playersJson.data.team.defenses, 
      playersCenters: playersJson.data.team.centers,
      playersGoal: playersJson.data.team.goalkeepers,
      playersForwards: playersJson.data.team.forwards, 
      isFetch: false }))


  }

  

  render() {

    const { isFetch, players, playersCenters, playersGoal,playersForwards} = this.state
    if(isFetch){
      return 'Loading...'
    }
    return[
      players.map((players) => 
      <VenadosPlayers name= {players.name} 
      key ={players.generatorID}
      first = {players.first_surname}  
      second = {players.second_surname} 
      position={players.position}
      number={players.number}
      birthday={players.birthday}
      image={players.image}/>),

      playersCenters.map((playersCenters) => 
      <VenadosPlayers name= {playersCenters.name} 
      key = {playersCenters.generatorID}
      first = {playersCenters.first_surname} 
      second = {playersCenters.second_surname} 
      position={playersCenters.position}
      number={playersCenters.number}
      birthday={playersCenters.birthday}
      image={playersCenters.image}/>),

      playersGoal.map((playersGoal) => 
      <VenadosPlayers name= {playersGoal.name} 
      key = {playersGoal.generatorID}
      first = {playersGoal.first_surname} 
      second = {playersGoal.second_surname} 
      position={playersGoal.position}
      number={playersGoal.number}
      birthday={playersGoal.birthday}
      image={playersGoal.image}/>),

      playersForwards.map((playersForwards) => 
      <VenadosPlayers name= {playersForwards.name} 
      key = {playersForwards.generatorID}
      first = {playersForwards.first_surname} 
      second = {playersForwards.second_surname} 
      position={playersForwards.position}
      number={playersForwards.number}
      birthday={playersForwards.birthday}
      image={playersForwards.image}/>)


    ]
  }
}

export default Players;
