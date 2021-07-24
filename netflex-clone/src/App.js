import Row from './componemt/Row';
import Banner from './componemt/Banner';
import Request from './componemt/Request'
import './App.css'
function App() {
  return (
    <div >
      <Banner />
      
      <Row title="Movie upcoming " fetchURL={Request.fetchUpComing} isLargeRow/>
      <Row title="Popular " fetchURL={Request.fetchPopular} />
      <Row title="Netflix Originals " fetchURL={Request.fetchNetflixOriginals}/>
      <Row title="Trending Now " fetchURL={Request.fetchTrending}/>
      <Row title="Rated " fetchURL={Request.fetchTopRated}/>
      <Row title="Action Movie " fetchURL={Request.fetchActionMovies}/>
      <Row title="Comedy Movie " fetchURL={Request.fetchComedyMovies}/>
      <Row title="Horror Movie " fetchURL={Request.fetchHorrorMovies}/>
      <Row title="Documentaries " fetchURL={Request.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
