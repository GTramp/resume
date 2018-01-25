/*
 * @Author: command
 * @Date: 2018-01-25 16:58:25 
 * @Last Modified by: commad
 * @Last Modified time: 2018-01-25 18:45:46
 */
import React from 'react'
import './style.css'

import Header from '../header'
import SideBar from '../sidebar'

export default class App extends React.Component {
  /**
   * render
   *
   * @returns
   * @memberof App
   */
  render() {
    return (
      <div id="app">
        {/* header */}
        <Header />
        {/* container */}
        <div className="container">
          {/* sidebar */}
          <SideBar />
        </div>
      </div>
    )
  }
}
