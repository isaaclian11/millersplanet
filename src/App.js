import './App.css';
import Clock from './components/Clock';

function App() {
  return (
    <>
      <video src="/background-video.mov" autoPlay loop muted/>
      <div className="text-container">
          <h1>E L A P S E D</h1>
          <Clock className="clock-container"/>
      </div>
    </>
  );
}

export default App;
