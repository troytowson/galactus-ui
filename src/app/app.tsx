import React = require('react');

import Navigation = require('./navigation');

var App = React.createClass({
    render : function() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                <Navigation style={{flex: '0', width: '100px', backgroundColor: 'rgb(12, 3, 62)'}}></Navigation>
                <div style={{flex: '1'}}>
                </div>
            </div>
        );
    }
});

export = App; 
