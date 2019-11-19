import React from 'react'
import Games from '../../Games'


  class Home extends React.Component {

  constructor (props){
    super(props)
  

    this.state = {
      games: [],
      isFetch: true,
   
    }
  }
  
  componentDidMount(){
    const uri = 'https://cors-anywhere.herokuapp.com/https://venados.dacodes.mx/api/games';

    let h = new Headers();
    h.append('Accept','application/json');

    let req = new Request(uri, {
      method: 'GET',
      headers: h,
      mode:'cors'
    });

    fetch(req)
    .then(responser => responser.json())
    .then(gamesJson => this.setState({ games: gamesJson.data.games, isFetch: false }))


  }
  
  

  render() {

    const { isFetch, games } = this.state
    if(isFetch){
      return 'Loading...'
    }
    return(
      
      games.map((games) => 
      
      <Games 
     
      image= {games.opponent_image} 
      league = {games.league} 
      date={games.datetime}
      away={games.away_score}
      home={games.home_score}
      opponent={games.opponent}/>)
     

    )
  }
}

export default Home;

// if(game.league === 'COPA MX'){
    // if(game.local === true){
//    games.map((games) => 
//    <Games imageCopa= {games.opponent_image} 
//    keyCopa={games.datetime}
//    awayCopa={games.away_score} 
//    homeCopa={games.home_score}
//    opponentCopa={games.opponent}/>)}{

      // } else{
      //   games.map((games) => 
//    <Games imageCopa= {games.opponent_image} 
//    keyCopa={games.datetime}
//    awayCopa={games.away_score} 
//    opponentCopa={games.home_score}
//    homeCopa={games.opponent}/>
      // }

//  } else if (game.league === 'ASCENSO MX'){
//  games.map((games) => 
//  <Games imageAscenso= {games.opponent_image} 
//  keyAscenso={games.datetime}
//  awayAscenso={games.away_score}
//  homeAscenso={games.home_score}
//  opponentAscenso={games.opponent}/>)
//  } else {
//   games.map((games) => 
//   <Games imageAmistoso= {games.opponent_image} 
//   keyAmistoso={games.datetime}
//   awayAmistoso={games.away_score}
//   homeAmistoso={games.home_score}
//   opponentAmistoso={games.opponent}/>)

//  }


