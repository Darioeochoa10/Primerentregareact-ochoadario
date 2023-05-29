import "./../../assets/styles/ItemListContainer.css";
const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1 className="welcome"> {greeting} </h1>
    </div>
  );
};

export default ItemListContainer;
