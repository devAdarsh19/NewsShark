import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component { 
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <BrowserRouter basename='/NewsShark'>
        <div>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/NewsShark' element={<News setProgress={this.setProgress} key='general' pageSize={20} category={'general'} apiKey={this.apiKey} />} />
            <Route exact path='/business' element={<News setProgress={this.setProgress} key='business' pageSize={20} category={'business'} apiKey={this.apiKey} />} />
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key='entertainment' pageSize={20} category={'entertainment'} apiKey={this.apiKey} />} />
            <Route exact path='/health' element={<News setProgress={this.setProgress} key='health' pageSize={20} category={'health'} apiKey={this.apiKey} />} />
            <Route exact path='/science' element={<News setProgress={this.setProgress} key='science' pageSize={20} category={'science'} apiKey={this.apiKey} />} />
            <Route exact path='/sports' element={<News setProgress={this.setProgress} key='sports' pageSize={20} category={'sports'} apiKey={this.apiKey} />} />
            <Route exact path='/technology' element={<News setProgress={this.setProgress} key='technology' pageSize={20} category={'technology'} apiKey={this.apiKey} />} />
            <Route exact path='/aus' element={<News setProgress={this.setProgress} key='australia' pageSize={20} country={'au'} apiKey={this.apiKey} />} />
            <Route exact path='/in' element={<News setProgress={this.setProgress} key='india' pageSize={20} country={'in'} apiKey={this.apiKey} />} />
            <Route exact path='/nz' element={<News setProgress={this.setProgress} key='newzealand' pageSize={20} country={'nz'} apiKey={this.apiKey} />} />
            <Route exact path='/uk' element={<News setProgress={this.setProgress} key='uk' pageSize={20} country={'gb'} apiKey={this.apiKey} />} />
            <Route exact path='/usa' element={<News setProgress={this.setProgress} key='usa' pageSize={20} country={'us'} apiKey={this.apiKey} />} />

          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

