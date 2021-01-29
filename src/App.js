import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';
import resumeData from './resumeData.json'

class App extends Component {

  constructor() {
    super();
    this.state = {
      resumeData: {}
    };
  }

  componentDidMount() {
    this.setState({ resumeData: resumeData });
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
