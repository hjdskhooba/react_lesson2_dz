import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './scss/style.scss'
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Main/>
      </main>
      <SignIn/>
      <Footer/>
    </>
  )
}

export default App;
