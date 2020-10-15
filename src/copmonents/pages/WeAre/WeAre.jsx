import React, { Component } from 'react'
import './WeAre.scss'
import { withTranslation } from 'react-i18next'

class WeAre extends Component {

  state = {
    opacity: 0
  }

  componentDidMount() {
    this.setState({ opacity: 1 })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  render() {
    let { t } = this.props


    return (
      <div className='we-are' >
        <div className="section">
          <div className="header">
            <h1 className="main-title" style={{ opacity: this.state.opacity }} >{t("title")}</h1>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <h2 className="title">{t("title")}</h2>
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

export default withTranslation()(WeAre)
