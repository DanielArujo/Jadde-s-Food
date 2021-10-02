

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Jaddes from './pages/tela-inicial'

export default function Routes() { 
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Jaddes} />
            </Switch>
        </BrowserRouter> 
    )
}