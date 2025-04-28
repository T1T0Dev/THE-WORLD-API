import {Container,Row,Col} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import {CharacterCard} from '../components/CharacterCard';
import {ButtonComponent} from '../components/ButtonComponent';
import { RICK_MORTY_API_URL } from '../routes/routes';


export const RickMortyPage = () => {

   // Caracter inicia con un array vacio
   const [characters, setCharacters] = useState([]);

   // Cargar los personajes 
   const [page, setPage] = useState(1);
 
   //Utilizamos el useEffect para cargar los personajes
   //El useEffect se ejecuta cada vez que cambia la paginas
   useEffect(() => {
     fetch(`${RICK_MORTY_API_URL}${page}`)
       .then((response) => response.json())
       .then((data) => {
         setCharacters(data.results);
       });
   },[page]);
 
     //Actualizar pagina 
     const loadMore =()=>{
       setPage(page => page + 1);
     }
 
  return (

    <div className="App">

    <Container>
      <h1>PERSONAJES DE RICK Y MORTY</h1>

      <Row>
        {/*Mapeamos los personajes */}
        {characters.map(char => (
          <Col key={char.id} xs={12} sm={6} md={4} lg={3}>

            {/* Pasamos a traves Props el caracter*/}
            <CharacterCard character={char} />
          </Col>
        ))}
      </Row>

      <ButtonComponent onClick={()=>{
        console.log("Cargando mas personajes");
        loadMore();
      }} 
      variant="primary"
      >
        Ver mas personajes
      </ButtonComponent>
    </Container>

    </div>
  )
}
