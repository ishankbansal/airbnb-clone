import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={require(`${item.coverImg}`)}
        rating={item.stats.rating}
        reviewcount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    )
  })
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
