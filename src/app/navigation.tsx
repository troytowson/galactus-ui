import React = require('react');

interface INavigationProps {
    style : Object;
}

var Navigation = React.createClass<INavigationProps, {}>({
    render : function(){
        return (
            <div style={this.props.style}> 
                <ul style={{listStyle: 'none', margin: '0', padding: '0' }}>
                    <li style={{padding: '20px 25px'}}>
                        <a href="#">C</a>
                    </li>
                    <li style={{padding: '20px 25px'}}>
                        <a href="#">B</a>
                    </li>
                    <li style={{padding: '20px 25px'}}>
                        <a href="#" style={{color: '#CB0F7E'}}>A</a>
                    </li>
                </ul>
            </div>
        );
    }
});

export = Navigation;
