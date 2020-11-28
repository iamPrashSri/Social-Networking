import './App.css';
import Header from './Header/Header';
import SideBar from './Sidebar/Sidebar';

function App() {
  return (
    // BEM Naming Convention - Helps to scale applications (Learn this)
    // npm install -g firebase-tools
    <div className="app">
      <Header />

      <div className="app__body">
        <SideBar />
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
