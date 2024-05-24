import { Link, useParams } from 'react-router-dom';
import { CategoryData } from '../../data';

const Article = () => {
  const params = useParams();
  let item = CategoryData.find((item) => item.id == params.id);

  return (
    <>
      <div className="link-container">
        <Link to="/">Home</Link>
      </div>
      <ul>
        <li className="item">{item.id}</li>
        <li className="item">
          <img src={item.icon} alt="" />
        </li>
        <li className="item">{item.categoryName}</li>
      </ul>
    </>
  );
};

export default Article;
