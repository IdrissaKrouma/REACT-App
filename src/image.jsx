import './App.css';

function Image(props) {
  return (
    <img className ='image' src={props.image} alt="NOT FOUND" />
  );
}

export default Image;
