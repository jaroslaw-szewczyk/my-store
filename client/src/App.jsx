import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import MainNav from './Components/MainNav/MainNav';
import Footer from './Components/Footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <MainNav />
      <Footer />
    </Container>
  )
}

export default App;
