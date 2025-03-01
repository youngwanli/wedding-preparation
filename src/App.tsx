import { Route, Switch } from 'wouter';
import { TaskList } from './pages/TaskList';
import { UpdateHistory } from './pages/UpdateHistory';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={TaskList} />
        <Route path="/history" component={UpdateHistory} />
      </Switch>
    </>
  );
}

export default App;
