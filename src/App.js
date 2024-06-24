import logo from './logo.svg';
import './App.css';
import MatchList from './components/MatchList.jsx';
import PlayerList from './components/PlayerList.jsx';
import matchData from './data/matchData.js';
import playerData from './data/playerData.js';
import { preparePlayerData, addWinsToPlayers } from "./helpers/playerHelpers";


function App() {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  return (
    <div className="App">
      <h1>Tourney Matches{" "} 
        <span>Where Coding and Tournaments found their Match!</span>
        </h1>
      <PlayerList matchData = {matchData}  playerData={parsedPlayerData}/>
      <MatchList matchData = {matchData} />
     
    </div>
  );
}

export default App;
