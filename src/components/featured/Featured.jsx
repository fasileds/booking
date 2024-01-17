import useFatch from "../../hooks/useFache";
import "./featured.css";

const Featured = () => {
  const { data, loding, error } = useFatch(
    "http://localhost:3001/api/hotel/countbycity?cities= debire birhan,addis abeba"
  );
  console.log(data);
  return (
    <div className="featured">
      {loding ? (
        "loding please waite"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/OIP.S6FljC55M8zaIQmraAGBrgHaE8?rs=1&pid=ImgDetMain"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>debire birhan</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/OIP.S6FljC55M8zaIQmraAGBrgHaE8?rs=1&pid=ImgDetMain"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>debire birhan</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/OIP.S6FljC55M8zaIQmraAGBrgHaE8?rs=1&pid=ImgDetMain"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>addis abeba</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
