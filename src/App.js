import './App.css';
import Sites from './sites'
import Nom from './nom'
import Image from './image'
import Description from './description'
import Lien from './lien'

const {urlImage,nom,description,lien}= Sites[4];

function App() {
  return (
    <div className='App'>
      <Image image ={urlImage} />
      <Nom nom ={nom} />
      <Description description ={description} />
      <Lien lien ={lien} />
    </div>
  );
}

export default App;
