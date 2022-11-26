import { AuthContext } from './helpers/AuthContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Character from './pages/Character';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <AuthContext.Provider>
      <Router>
        <div className='navbar'>
          <div className='links'>
            <Link to='/'>Mortal Kombat 11 Wikipedia</Link>
            {false ? (
              <div className='loggedInContainer'>
                <h1>User</h1>
                <button> Logout</button>
              </div>
            ) : (
              <div className='loggedInContainer'>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </div>
            )}
          </div>
        </div>
        <Routes>
          <Route path='/character:id' element={<Character />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
