import React from 'react';
import './skeleton.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import Scrawl from './containers/Scrawl';
import ScrawlNew from './containers/ScrawlNew';
import ScrawlEdit from './containers/ScrawlEdit';
import 'font-awesome/css/font-awesome.min.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/scrawl/:slug" exact component={Scrawl}/>
                    <Route path="/scrawlNew" exact component={ScrawlNew}/>
                    <Route path="/scrawlEdit/:slug" exact component={ScrawlEdit}/>
                </Switch>
            </header>
        </div>
    );
}

export default App;