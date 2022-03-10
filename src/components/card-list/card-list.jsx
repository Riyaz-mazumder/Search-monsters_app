import './card-list-stile.css';
import './card.style.css';
import Card from '../card/card';

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map(monster => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
