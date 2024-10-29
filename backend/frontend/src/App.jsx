import './App.css'
import Header from './components/header'
import Banner from './components/banner'
import Table from './components/table'
import Footer from './components/footer'

function App() {
  return (
    <div className="bg-[#171717] min-h-screen">
      <Header />
      <Banner
        title="List of Tools"
        description="Melhores ferramentas IA para desenvolvimento, design, áudio, vídeo e documentos de texto."
      />
      <Table />
      <Footer />
    </div>
  )
}

export default App
