import { Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from '../../core/routing';
import History from './History/History';
import Missions from './Missions/Missions';
import Profile from './Profile/Profile';


const MainRouting = () => {   
    
    return (
        <Switch>
            <Route path={Routes.MissionsOverview}>
                <Missions />
            </Route>
            <Route path={Routes.Profile}>
                <Profile/>
            </Route>
            <Route path={Routes.History}>
                <History/>
            </Route>
            <Redirect to={Routes.MissionsOverview} />
        </Switch>
    );
};

export default MainRouting;
