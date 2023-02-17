import React from 'react';
import {Route, Switch} from "react-router-dom";
import blogRoutes from "../../router/blogRoutes";

const BlogPage = ({ match }) => (
  <div>
    <Switch>
      {
        blogRoutes.map((prop, key) => {return <Route exact path={`${match.path}${prop.path}`} key={key} component={prop.component}/>;})
      }
    </Switch>
  </div>
);

BlogPage.propTypes = {};

export default BlogPage;