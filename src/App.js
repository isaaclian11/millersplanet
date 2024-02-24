import './App.css';
import Clock from './components/Clock';
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Interstellar - Time Elapsed on Miller's Planet</title>
        <style>{'body { background-color: black; }'}</style>
      </Helmet>
      <video autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4"/>     
      </video>
      <div className="text-container">
          <h2>Time</h2>
          <h1>E L A P S E D</h1>
          <Clock />
      </div>
    </>
  );
}

export default App;
