import React,{useState} from 'react';
import Navbar from './Navbar.js';
import News from './News.js';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
const App=()=>{
  const [progress,setprogress]=useState(10);
  const setProgress=(progress)=>{
    setprogress(progress);
  }
    return(
      <div>
        <Router>
          <Navbar/>
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
            />
          <Routes>
              <Route exact path="/home" element={<News setProgress={setProgress}  key="home" pageSize={3} country="in"/>}/>
              <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={3} country="in" category="business"/>}/>
              <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={3} country="in" category="entertainment"/>}/>
              <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={3} country="in" category="general"/>}/>
              <Route exact path="/health"  element={<News setProgress={setProgress}  key="health" pageSize={3} country="in" category="health"/>}/>
              <Route exact path="/science" element={<News setProgress={setProgress}  key="science"  pageSize={3} country="in" category="science"/>}/>
              <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={3} country="in" category="sports"/>}/>
              <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={3} country="in" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
}
export default App;
