import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Wedgets from "./components/Wedgets";

function App() {
  const user = null;
  return (
    <div className="app">
      {user? (<Login />) :
      ( 
      <>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Wedgets />
      </div> 
      </>
      )}
      
    </div>
  );
}

export default App;
