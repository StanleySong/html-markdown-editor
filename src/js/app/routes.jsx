/*!
 * stanley song (sxhuan@gmail.com)
 */

import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import HtmlEditor from './components/HtmlEditor';
import MDEditor from './components/MDEditor';


export default(
    <Router history={browserHistory}>
        <Route path="/" component={App}>

            {/* Default route*/}
            <IndexRoute component={HtmlEditor} />
            <Route path="htmleditor" component={HtmlEditor}/>
            <Route path="mdeditor" component={MDEditor}/>
        </Route>

        {/* Not found handler */}
        {/*<Route path="*" component={NotFound}/>*/}

    </Router>
);
