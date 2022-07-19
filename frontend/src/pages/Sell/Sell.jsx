import React, {
  // useRef,
  useEffect,
  useState,
} from "react";
import "./Sell.css";
import { IoReloadSharp } from "react-icons/io5";
import SellCard from "./SellCard";
import axios from "axios";
import { toast } from "react-toastify";


const Sell = ({ match }) => {
  // const history = useHistory();

  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/properties");
    setData(response.data);
    console.log(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {/* <div className="sellCards-head">
          <div className="sell-search-container">
            <Search />
          </div>
        </div> */}

      <div className="sell-container">
        <div className="sell-left">
          <div className="sell-left-head">
            <p>{5} result found </p>
            <button>
              <IoReloadSharp />
            </button>
          </div>
          <div className="sell-left-body">
            {data &&
              data.map((property) => (
                <SellCard key={property.PID} property={property} />
              ))}
          </div>
        </div>
        <div className="sell-right"></div>
      </div>
    </div>
  );
};

export default Sell;
