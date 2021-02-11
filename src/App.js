import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';
import resumeData from './resumeData.json'

const App = () => {
    return (
        <div className="App">
            <Header data={resumeData.main} />
            <About data={resumeData.main} />
            <Resume data={resumeData.resume} />
            <Testimonials data={resumeData.testimonials} />
            <Footer data={resumeData.main} />
        </div>
    );
}

export default App;
