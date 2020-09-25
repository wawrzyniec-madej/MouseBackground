import React from 'react';
import MouseBackground from './MouseBackground';

function App() {
  return (


      <div style={{ maxWidth:"800px", margin: "0 auto" }}>

        <MouseBackground height={500} radius={25} pushAway cover url="https://krakowskiryneknieruchomosci.pl/wp-content/uploads/2020/07/logo-e1594284322677.jpg"/>
        <MouseBackground height={255} radius={50} clearOnLeave url="https://krakowskiryneknieruchomosci.pl/wp-content/uploads/2020/07/logo-e1594284322677.jpg"/>
        <MouseBackground height={255} radius={50} pushAway clearOnLeave url="https://krakowskiryneknieruchomosci.pl/wp-content/uploads/2020/07/logo-e1594284322677.jpg"/>

      </div>


  );
}

export default App;
