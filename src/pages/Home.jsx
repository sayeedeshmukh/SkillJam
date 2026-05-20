import Header from '../components/Header'
import homeBg from '../assets/images/home-bg.png'

function Home() {
  return (
    <div className="bg" style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="home-container">
        <Header />
      </div>
    </div>
  )
}

export default Home