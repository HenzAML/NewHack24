import { Routes, Route } from 'react-router-dom';
import SignInPage from './pages/Signin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignInPage />
    </>
  )
}

export default App
