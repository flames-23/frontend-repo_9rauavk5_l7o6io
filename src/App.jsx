import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import Footer from './components/Footer';

const sample = (seed = 0) =>
  Array.from({ length: 14 }, (_, i) => ({
    title: `Title ${i + 1 + seed}`,
    img: `https://image.tmdb.org/t/p/w500${[
      '/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg',
      '/7bEYwjUvlJW7GerM8GYmqwl4oS6.jpg',
      '/sUxnxEDhGJwmO1Mry0KSUoZAK8F.jpg',
      '/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg',
      '/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg',
      '/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg',
      '/5P8SmMzSNYikXpxil6BYzJ16611.jpg',
      '/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
      '/4vCh8R4yd6ybOmbxRAPOzaXmLTV.jpg',
      '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    ][(i + seed) % 10]}`,
  }));

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <div className="mx-auto max-w-7xl">
          <Row label="Trending Now" items={sample(0)} />
          <Row label="Top Picks for You" items={sample(1)} />
          <Row label="Critically Acclaimed" items={sample(2)} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
