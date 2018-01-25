/*
 * @Author: command
 * @Date: 2018-01-25 17:35:40 
 * @Last Modified by: commad
 * @Last Modified time: 2018-01-25 18:39:12
 */
import React from 'react'
import './style.css'

export default class Header extends React.Component {
  /**
   * render
   *
   * @returns
   * @memberof Header
   */
  render() {
    return (
      <div id="header">
        {/* title */}
        <span className="title">Programming is an art form.</span>
        {/* logo */}
        <div className="logo">
          <img
            src={require('../../assets/logo/iOS.png')}
            alt="iOS"
            onClick={this.onClickHandler.bind(this, 'iOS')}
          />
          <img
            src={require('../../assets/logo/vue.png')}
            alt="vue"
            onClick={this.onClickHandler.bind(this, 'vue')}
          />
          <img
            src={require('../../assets/logo/react.svg')}
            alt="react"
            onClick={this.onClickHandler.bind(this, 'react')}
          />
        </div>
        {/* home */}
        <img
          className="home-logo"
          src={require('../../assets/logo/home.png')}
          alt="home"
          onClick={this.onClickHandler.bind(this, 'home')}
        />
      </div>
    )
  }

  /**
   * onClickHandler
   *
   * @param {String} param
   * @memberof Header
   */
  onClickHandler(param) {
    if (param === 'iOS') {
      const APPLE_DEVELOPER = 'https://developer.apple.com/documentation/'
      window.open(APPLE_DEVELOPER)
    } else if (param === 'vue') {
      const VUE_DEVELOPER = 'https://cn.vuejs.org/'
      window.open(VUE_DEVELOPER)
    } else if (param === 'react') {
      const REACT_DEVELOPER = 'https://reactjs.org/'
      window.open(REACT_DEVELOPER)
    } else if ('home') {
      alert('go home')
    }
  }
}
