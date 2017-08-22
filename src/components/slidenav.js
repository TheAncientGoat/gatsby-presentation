import React from 'react'
import Link from 'gatsby-link'
import { withRouter } from 'react-router-dom'

const nextSlide = () =>
    (parseInt(window.location.href.split('/').pop()) || 0) + 1

const prevSlide = () =>
    (parseInt(window.location.href.split('/').pop()) || 0) - 1

class SlideNav extends React.Component {
    constructor() {
        super()
        this._handleKeyDown = this._handleKeyDown.bind(this)
    }

    componentWillMount() {
        document
            .addEventListener(
                "keydown",
                this._handleKeyDown
            );

    }

    componentWillUnmount() {
        document
            .removeEventListener(
                "keydown",
                this._handleKeyDown
            );

    }

    _handleKeyDown(event) {
        switch( event.keyCode ) {
            case 37: // left
                console.warn(this.props)
                this.props.history.push('/' + prevSlide())
                break;
            case 39: // right
            case 38: // up
                this.props.history.push('/' + nextSlide())
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div
                style={{
                    position: 'absolute',
                    bottom: '0px',
                    width: '100%',
                    padding: '10px',
                    marginTop: '1.45rem',
                    background: 'rebeccapurple',
                }}>
                <Link to={prevSlide()} className="nav left">
                    Prev
                </Link>
                <Link to={nextSlide()} className="nav right">
                    Next
                </Link>
            </div>
  )
    }
}

export default withRouter(SlideNav)
