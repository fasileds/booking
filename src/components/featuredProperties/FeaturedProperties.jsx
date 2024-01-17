import useFatch from "../../hooks/useFache";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loding, error } = useFatch(
    "http://localhost:3001/api/hotel?featured=true"
  );
  return (
    <div className="fp">
      {loding ? (
        "waite it is loding"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item}>
              <img
                src="https://th.bing.com/th/id/OIP.iTX4EIDNcnhJ8ywSrHWdiQAAAA?rs=1&pid=ImgDetMain"
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.chepestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
