import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar.js';


function App() {
  return (
    <div className="page">
        
        <div className="sidebar">
          <Sidebar />
        </div>
    
      <div className="main-content">
        <div className="header">
          {/* Name, title, profile */}
        </div>
        
        <div className="education">
          {/* Education */}
        </div>

        <div className="experience">
          {/* Experience/Skills */}
        </div>
      </div>
    </div>
  );
}

export default App;
