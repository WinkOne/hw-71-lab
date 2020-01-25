import React from 'react';
import {Route, Switch} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import Orders from "./containers/Dishes/Dishes";
import Dish from "./containers/Orders/Orders";



function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Orders}/>
                <Route path="/dish"  component={Dish}/>
                <Route render={() => <h1>Not found</h1>}/>
            </Switch>
        </Layout>

    );
}

export default App;
