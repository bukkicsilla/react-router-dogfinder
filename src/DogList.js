import "./DogList.css";
const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      <div className="DogList-dogs">
        {dogs.map((dog) => (
          <div className="DogList-dog" key={dog.name}>
            <h3>{dog.name}</h3>
            <img src={dog.src} alt={dog.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default DogList;
