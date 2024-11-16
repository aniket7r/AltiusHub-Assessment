import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ViewComponents from './InvoiceList/ViewComponents'
class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <h1 className='heading' style= {{color: 'grey'}}>Altius Hub</h1>
          <div className='sidebar'>
            <Link to ="/invoices"> Invoices </Link>
          </div>
          <div>
            <Routes>
              <Route exact path='/invoices' element={<ViewComponents/>} />
            </Routes>
          </div>
        </div>
      </Router>
    )
  }
}

export default App 
