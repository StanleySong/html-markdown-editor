/*!
 * stanley song (sxhuan@gmail.com)
 */

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HeaderHorizontal from './components/HeaderHorizontal';



class Base extends React.Component {

    componentWillMount() {
        // $('body').addClass('layout-h');
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        // Only necessary for demo to restore classic layout
        // $('body').removeClass('layout-h');
    }

    render() {
        const animationName = 'rag-fadeIn';

        return (
            <div className="wrapper">
                <HeaderHorizontal />

                <ReactCSSTransitionGroup
                  component="section"
                  transitionName={animationName}
                  transitionEnter={false}
                  transitionLeave={false}
                >
                  {React.cloneElement(this.props.children, {
                    key: Math.random()
                  })}
                </ReactCSSTransitionGroup>
            </div>
        );
    }

}

export default Base
