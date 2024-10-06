import './App.css';
import navbar from './components/Navbar/navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <navbar/>
    <home/>
    <middle/>
    <destination/>
    <portfolio/>
    <review/>
    <questions/>
    <subscribe/>
    <footer/>
   </div>
  )
}

export default App
