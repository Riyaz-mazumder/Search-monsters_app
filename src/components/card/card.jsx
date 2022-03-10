const Card = ({ monster: { id, name, email } }) => {
  console.log(id);
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=ser2`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
