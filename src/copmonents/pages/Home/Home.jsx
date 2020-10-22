
import React, { Component } from 'react'
import './Home.scss'


export default class Home extends Component {

  componentDidMount() {
    document.title = "LaGubia"
  }

  render() {
    return (
      <div>
        <div className="section">
          <div className="header">
            <h1 className="main-title"  ></h1>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <h2 className="title"></h2>
            <p className="section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, suscipit blanditiis doloribus et illum neque labore pariatur consequatur amet excepturi dolorum numquam ab assumenda laborum doloremque nihil quis non eos.</p>
          </div>

        </div>

        <div className="section">
          <div className="container">
            <h2 className="title">LAGUBIA</h2>
            <p className="section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, suscipit blanditiis doloribus et illum neque labore pariatur consequatur amet excepturi dolorum numquam ab assumenda laborum doloremque nihil quis non eos.</p>
          </div>

        </div>

        <div className="section">
          <div className="container">
            <h2 className="title">LAGUBIA</h2>
            <p className="section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, suscipit blanditiis doloribus et illum neque labore pariatur consequatur amet excepturi dolorum numquam ab assumenda laborum doloremque nihil quis non eos.</p>
          </div>

        </div>
      </div>
    )
  }

}
