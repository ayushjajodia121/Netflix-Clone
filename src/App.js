import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';

function App() {
  return (
    <div>
      <Banner>
        
      </Banner>


      <Row title="Netfilx Originals" endpoint={requests.fetchNetflixOriginals} isLarge/>         { /*we cannot access object property without using name of object */}
      <Row title="Trending Now" endpoint={requests.fetchTrending}/>
      <Row title="Top Rated" endpoint={requests.fetchTopRated}/>
      <Row title="Action Movies" endpoint={requests.fetchActionMovies}/>
      <Row title="Horror" endpoint={requests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" endpoint={requests.fetchRomanticMovies}/>
      <Row title="Comedy Movies" endpoint={requests.fetchComedyMovies}/>
      <Row title="Documentaries" endpoint={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
