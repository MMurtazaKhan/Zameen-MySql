import React, {
  // useRef,
  useEffect,
  // useState,
} from "react";
import "./Sell.css";
import Search from "../../components/Search/Search";
import { IoReloadSharp } from "react-icons/io5";
import SellCard from "./SellCard";
import { getProperty, clearErrors } from "../../actions/sellAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";

const Sell = ({ match }) => {
  // const history = useHistory();
  const alert = useAlert();

  const {keyword, purpose, price, landArea} = useParams();

  const dispatch = useDispatch();
  const {
    // loading,
    error,
    // propertyCount,
    // resultPerPage,
    property,
    filteredPropertyCount,
  } = useSelector((state) => state.property);





  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProperty(keyword, purpose, price, landArea));
  }, [dispatch, keyword, error, alert, purpose, price, landArea]);

  return (
    <div>
      <div className="sellCards-head">
        <div className="sell-search-container">
          <Search />
        </div>
      </div>

      <div className="sell-container">
        <div className="sell-left">
          <div className="sell-left-head">
            <p>{filteredPropertyCount} result found </p>
            <button>
              <IoReloadSharp />
            </button>
          </div>
          <div className="sell-left-body">
            {property &&
              property.map((property) => (
                <SellCard key={property._id} property={property} />
              ))}
          </div>
        </div>
        <div className="sell-right"></div>
      </div>
    </div>
  );
};

export default Sell;

// import React, { useEffect } from "react";
// import "./Sell.css";
// import Search from "../../components/Search/Search";
// import { IoReloadSharp } from "react-icons/io5";
// import SellCard from "./SellCard";
// import { getProperty, clearErrors } from "../../actions/sellAction";
// import { useSelector, useDispatch } from "react-redux";
// import { useAlert } from "react-alert";

// const Sell = ({match}) => {
//   const dispatch = useDispatch();
//   const {
//     // loading,
//     error,
//     // propertyCount,
//     // resultPerPage,
//     property,
//     filteredPropertyCount,
//   } = useSelector((state) => state.property);

//   const city = match.params.keyword;

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//     dispatch(getProperty( city ));
//   }, [dispatch, city]);

//   return (
//     <div>
//       <div className="sellCards-head">
//         <div className="sell-search-container">
//           <Search />
//         </div>
//       </div>

//       <div className="sell-container">
//         <div className="sell-left">
//           <div className="sell-left-head">
//             <p>5 result found </p>
//             <button>
//               <IoReloadSharp />
//             </button>
//           </div>
//           <div className="sell-left-body">
//             {property &&
//               property.map((property) => (
//                 <SellCard key={property._id} property={property} />
//               ))}
//           </div>
//         </div>
//         <div className="sell-right"></div>
//       </div>
//     </div>
//   );
// };

// export default Sell;
