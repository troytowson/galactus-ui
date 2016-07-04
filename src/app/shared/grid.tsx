import * as React from 'react';

module Grid {
    
    export interface IColumnProps {
        fill? : boolean;
    }
    
    export interface IColumnState {
    }
    
    export const Column = React.createClass<IColumnProps, IColumnState>({
        render: function() {
            var className = 'grid grid-column';
            
            if (this.props.fill) {
                className += ' fill'
            }
            
            if (this.props.className){
                this.props.className += ` ${this.props.className}`;
            }
            
            return (
                <div className={className} style={this.props.style}>
                    {this.props.children}
                </div>
            );
        } 
    });
    
    export interface IRowProps {
        fill? : boolean;
    }
    
    export interface IRowState {
    }
    
    export const Row = React.createClass<IRowProps, IRowState>({
        render: function() {
            var className = 'grid grid-row';
            
            if (this.props.fill) {
                className += ' fill'
            }
            
            if (this.props.className){
                this.props.className += ` ${this.props.className}`;
            }
            
            return (
                <div className={className} style={this.props.style}>
                    {this.props.children}
                </div>
            );
        }
    });
    
    export interface IItemProps {
        size?: string;
    }
    
    export const Item = React.createClass({
        render: function(){
            var className = 'grid-item';
            
            if (this.props.className){
                this.props.className += ` ${this.props.className}`;
            }
            
            if (this.props.size){
                this.props.style.flex = this.props.size;
            }
            
            return (
                <div className={className} style={this.props.style}>
                    {this.props.children}
                </div>
            );
        }
    });
}

export = Grid;