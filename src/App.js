import{useState,useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Desperado",
      artist: "Unknown",
      src: "./music/Desperado.mpeg"
    },
    {
      title: "Durga",
      artist: "Unknown",
      src: "./music/DurgaMantra.mpeg"
    },
    {
      title: "Favourite",
      artist: "Unknown",
       src: "./music/Favourite.mpeg"
    },
    
    {
      title: "HBD tune",
      artist: "Unknown",
      src: "./music/HappyBirthday.mpeg"
    },
    {
      title: "On My Way",
      artist: "Alan Walker",
      src: "./music/Om-My-Way.mpeg"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
