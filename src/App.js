import React from 'react';
import { Card,CardContent } from '@mui/material';
import { Login } from './components/Login';

function App() {
  return (
         <Card>
          <CardContent>
            
          <h1 style={{textAlign:"center"}}>PickupBiz Home</h1>
          <Login />
          {/* <Home /> */}
          </CardContent>
         </Card>

  );
}

export default App;
