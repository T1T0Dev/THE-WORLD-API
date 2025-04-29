import {Container,Row,Col} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import {CharacterCard} from '../components/CharacterCard/CharacterCard';
import {ButtonComponent} from '../components/ButtonComponent/ButtonComponent';
import { RICK_MORTY_API_URL } from '../routes/routes';
import './styles/RickMortyPage.css'; // Importa el archivo CSS para estilos adicionales
//React Bootstrap para esta Pagina


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
      <h1 className='title-rick'>
      CASTING DE PERSONAJES
      </h1>

      <Row>
        {characters
          .filter(char => char.name.trim().split(' ').length === 2)
          .slice(0, 8)
          .map(char => (
            <Col key={char.id} xs={12} sm={6} md={4} lg={3}>
              <CharacterCard character={char} />
            </Col>
          ))}
      </Row>

      

      <ButtonComponent onClick={()=>{
        loadMore();
      }} 
      variant="primary">
      </ButtonComponent>
    </Container>

    </div>
  )
}
