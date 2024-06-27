import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Dog.css";
const Dog = ({ dogs }) => {
  const params = useParams();
  let dog = dogs.find((dog) => dog.name.toLowerCase() === params.name);
  return (
    <div className="Dog">
      <img src={dog.src} alt={dog.name} />
      <h2>{dog.name}</h2>
      <h3>{dog.age} years old</h3>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
      <Link className="Dog-back" to="/dogs">
        Go Back
      </Link>
    </div>
  );
};

export default Dog;
