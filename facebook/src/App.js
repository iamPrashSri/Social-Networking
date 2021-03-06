import "./App.css";
import Header from "./Header/Header";
import SideBar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Widgets from "./Widgets/Widgets";
import Login from './Login/Login';
import { useStateValue } from "./DataLayerConfig/StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    // BEM Naming Convention - Helps to scale applications (Learn this)
    // npm install -g firebase-tools
    // React Context API
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>  {/* Whenever there is a sibling component, need to wrap it in a div or a JSX fragment */}
          <Header />

          <div className="app__body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
