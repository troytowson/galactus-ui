import React = require('react');

import * as Grid from './shared/grid';
//import Navigation = require('./shared/navigation');


var App = React.createClass({
    render : function() {
        return (
            <Grid.Row>
                <Grid.Item size="0 auto">
                </Grid.Item>
                <Grid.Item size="1 auto">
                </Grid.Item>
            </Grid.Row>
            /*<div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                <Navigation style={{flex: '0', width: '100px', backgroundColor: 'rgb(12, 3, 62)'}}></Navigation>
                <div style={{flex: '1'}}>
                </div>
            </div>*/
        );
    }
});

export = App; 
