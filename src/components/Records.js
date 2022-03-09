import HomeButton from "./HomeButton";
import { useEffect, useState } from "react";
import SingleRecord from "./SingleRecord.js";

function Records() {
  const [data, setData] = useState(null);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetch(BACKEND_URL + "/records")
      .then((res) => {
        console.log("test");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [BACKEND_URL]);

  return (
    <div>
      <h3>ALL RECORDS:</h3>
      <div>
        {data &&
          data.map((record, index) => (
            <SingleRecord 
              key={index}
              title={record.title}
              artist={record.artist}
              year={record.year}
              price={record.price}
            />
          ))}
      </div>

      <HomeButton />
    </div>
  );
}
export default Records;
