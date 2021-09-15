import './App.css';
import Clock from './components/Clock';
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Interstellar - Time Elapsed on Miller's Planet</title>
      </Helmet>
      <video src="/background-video.mp4" autoPlay loop muted playsinline/>
      <div className="text-container">
          <h2>Time</h2>
          <h1>E L A P S E D</h1>
          <Clock className="clock-container"/>
      </div>
    </>
  );
}

export default App;
