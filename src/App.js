import './App.css'
import Component4 from './components/homepage/component-4'
import Component1 from './components/homepage/component-1'
import Menu from './components/homepage/component-2'
import Component3 from './components/homepage/component-3'
// import Component2 from './components/homepage/component-2'
import Header from './components/homepage/header'
import Component5 from './components/homepage/component-5'
import Footer from './components/homepage/footer'

function App() {
  return (
    <>
      <Header />
      <Component1 />
      <Menu />
      <Component3 />
      <Component4 />
      <Component5 />
      <Footer />
    </>
  )
}

export default App
