import './App.css';
import BottomNote from './Components/BottomNote/BottomNote';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';

function App() {
    return (
        <div className="container-fluid">
            {/* <PageLoad /> */}
            <div className='row'>
                <Header/>
            </div>
            <div className='row'>
                <Hero/>
            </div>
            <div className='row'>
                <BottomNote/>
            </div>
            <div className='row'>
                <Gallery/>
            </div>
            <div className='row'>
                <Contact/>
            </div>
            <div className='row'>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
