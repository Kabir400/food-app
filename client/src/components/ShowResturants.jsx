import style from "../css/similarResturant.module.css";
import { useNavigate } from "react-router-dom";

function SimilarResturant(resturants) {
  const navigate = useNavigate();

  const resturantHandler = (id) => {
    navigate(`/resturant/${id}`);
  };

  return (
    <div className={style.container}>
      <div className={style.resturantContainerTop}>
        <h4 className={style.resturantText}>Similar Restaurants</h4>
        <div className={style.resturantContainer}>
          {resturants.map((item, index) => (
            <div
              className={style.resturantBox}
              key={index}
              onClick={() => {
                resturantHandler(item._id);
              }}
            >
              <img src={item.img} className={style.resturantImg} />
              <div className={style.resturantBottom}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SimilarResturant;
