import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar.js';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';


function App() {
  return (
    <div className="page">
        
        <div className="sidebar">
          <Sidebar />
        </div>
    
      <div className="main-content">
        <div className="header">
          <Header />
        </div>
        
        <div className="education">
          <Education />
        </div>

        <div className="experience">
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default App;
