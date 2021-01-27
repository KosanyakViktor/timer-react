import React from 'react';
import Counter from './Counter';

const App = () =>( 
  <>
     <Counter start={17} interval={1000}/>
     <Counter start={0} interval={2000}/>
     <Counter start={-21} interval={1500}/>
  </>
 
)

export default App;