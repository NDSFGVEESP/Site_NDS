import React from 'react';
import { Route, Switch} from "react-router-dom";
import intraRoutes from "../../router/intraRoutes";

const Intra = ( props ) => (
  <div>
      <Switch>
        {
          intraRoutes.map((prop, key) => {return <Route exact path={`${props.match.path}${prop.path}`} key={key} component={prop.component}/>;})
        }
      </Switch>
  </div>
);

Intra.propTypes = {};

export default Intra;