import React, { Component } from 'react'
import './WeAre.scss'

export default class WeAre extends Component {

  state = {
    opacity: 0
  }

  componentDidMount() {
    this.setState({ opacity: 1 })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  render() {

    return (
      <div className='we-are'>
        <div className="header">
          <h1 className="main-title" style={{ opacity: this.state.opacity }}>light, wood &#38; design</h1>
        </div>
      </div>
    )
  }
}