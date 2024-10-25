import './App.css';
import { ContentSection } from './components/content-section/ContentSection';
import { FooterSection } from './components/footer-section/FooterSection';
import { TitleSection } from './components/title-section/TitleSection';

function App() {
  return <div>
    <TitleSection></TitleSection>
    <ContentSection></ContentSection>
    <FooterSection></FooterSection>
  </div>;
}

export default App;
