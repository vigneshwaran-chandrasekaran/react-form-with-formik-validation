import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='col-4'></div>
      <div className='col-4'>
        <form action="/action_page.php">
          <div className="form-group">
            <label for="email">Email address:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" />
              <span>Remember me</span>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className='col-4'></div>
    </div>
  );
}

export default App;
