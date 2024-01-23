import Header from './Header.jsx'
import TimeManagement from './TimeManagement.jsx'
import Footer from './Footer.jsx'

function App() {
  return(
    <>
    {/* Can use both enclosing tags but must include <> and </> 
    for jsx, in tsx not needed */}
      <Header/>
      <TimeManagement/>
      <Footer></Footer>
    </>

  );
}

export default App;