import './App.css';
import RecipeList from "./RecipeList";
import Navbar from './Navbar'
import Instructors from './Instructors'

function App() {
  return (
    <div className="App">
        <Navbar />
        <RecipeList />
        <Instructors />
    </div>
  );
}

export default App;
