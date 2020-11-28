import './App.css';
import Header from './Header/Header';

function App() {
  return (
    // BEM Naming Convention - Helps to scale applications (Learn this)
    // npm install -g firebase-tools
    <div className="app">
      <h1>Let's build Facebook</h1>

      <Header />

      {/* App Body */}
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
    </div>
  );
}

export default App;
