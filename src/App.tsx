import { Route, Switch } from 'wouter';
import { TaskList } from './pages/TaskList';
import { UpdateHistory } from './pages/UpdateHistory';
import { ParticlesBackground } from './components/ParticlesBackground';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <div className="relative z-10">
        <Switch>
          <Route path="/" component={TaskList} />
          <Route path="/history" component={UpdateHistory} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
