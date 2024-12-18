import './App.css';
import Hero from './components/Hero';
import KeySemanticWork from './components/KeySemanticWork';
import Key from './components/Key';
import HeadlessFedrated from './components/HeadlessFederated';
import DataSecurity from './components/DataSecurity';
import KeySemanticForm from './components/KeySemanticsForm';
import BottomBar from './components/BottomBar';
import KeySemantics from './components/KeySemantics';
import BackToTop from './common/BackToTop';

function App() {
  return (
    <>
      <Hero />
      <KeySemanticWork />
      <KeySemantics/>
      <Key />
      <HeadlessFedrated />
      <DataSecurity />
      <KeySemanticForm />
      <BottomBar />
      <BackToTop/>
    </>
  );
}

export default App;
