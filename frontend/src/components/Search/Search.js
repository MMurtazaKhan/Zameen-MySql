import React, { useRef, useState } from "react";
import "./Search.css";
import { useHistory } from "react-router-dom";

const Search = () => {
  const history = useHistory();
  const optionTab = useRef(null);
  const [show, setshow] = useState("yes");
  const [keyword, setKeyword] = useState("Karachi");
  const [purpose, setPurpose] = useState("Sell");
  const [price, setPrice] = useState(100000000);
  const [landArea, setlandArea] = useState(100000000);

  const switchTabs = (e, tab) => {
    if (tab === "yes") {
      optionTab.current.classList.add("collapse-label");
      optionTab.current.classList.remove("null-container");
      setshow("yes");
    } else {
      optionTab.current.classList.add("null-container");
      optionTab.current.classList.remove("collapse-label");
      setshow("no");
    }
  };

  const City = ["Karachi", "Hyderabad", "Lahore", "Islamabad", "peshawar"];
  const purposeCategories = ["Sell", "Rent"];
  const priceRent = [10000, 20000, 30000, 500000, 100000, 200000, 500000];
  const priceSale = [
    100000,2000000, 4000000, 6000000, 800000, 1000000, 3000000, 5000000, 10000000
  ];
  const LandArea = [
    60, 120, 160, 200, 240, 360, 1000, 3000, 5000, 10000, 300000,
  ];

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/sell/${keyword}/${purpose}/${price}/${landArea}`);
    } else {
      history.push("/");
    }
  };

  return (
    <div className="Search-container">
      <h1>Search Properties for Sale</h1>
      <form onSubmit={searchSubmitHandler}>
        <div className="options-container">
          <div className="first-row">
            <div className="drop-down">
              <label for="City"> City </label>

              <select onChange={(e) => setKeyword(e.target.value)}>
                <option value="">City</option>
                {City.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="text"
              placeholder="Location"
              className="collapse-label"
              onClick={(e) => switchTabs(e, show)}
            />
            {/* <button type="submit">FIND</button> */}
            <input type="submit" value="Search" />
          </div>

          <div className="second-row null-container" ref={optionTab}>
            <div className="drop-down">
              <label for="Purpose"> Purpose </label>
              <select onChange={(e) => setPurpose(e.target.value)}>
                <option value="">Choose Category</option>
                {purposeCategories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div className="drop-down">
              <label for="Price"> Price </label>
              <div className="min-max">
                <select
                  name="Min"
                  className="price-box"
                  id="Price-1"
                  placeholder="0"
                >
                  <option value="">0</option>
                </select>
                <p>to</p>
                {purpose === "Rent" ? (
                  <select onChange={(e) => setPrice(e.target.value)}>
                    <option value="">Max Price</option>
                    {priceRent.map((cate) => (
                      <option key={cate} value={cate}>
                        {cate}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select onChange={(e) => setPrice(e.target.value)}>
                    <option value="">Max Price</option>
                    {priceSale.map((cate) => (
                      <option key={cate} value={cate}>
                        {cate}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            <div className="drop-down">
              <label for="Area"> Area (sy.yd)</label>
              <div className="min-max">
                <select name="Min" className="area-box" id="Area-1">
                  <option value="">0</option>
                </select>

                <p>to</p>
                <select onChange={(e) => setlandArea(e.target.value)}>
                  <option value="">Max Area</option>
                  {LandArea.map((cate) => (
                    <option key={cate} value={cate}>
                      {cate}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;

// import React, { useRef, useState } from "react";
// import "./Search.css";
// import {useHistory} from "react-router-dom"

// const Search = () => {
//   const history = useHistory();
//   const optionTab = useRef(null);
//   const [show, setshow] = useState("yes");
//   const [keyword, setKeyword] = useState("");

//   const switchTabs = (e, tab) => {
//     if (tab === "yes") {
//       optionTab.current.classList.add("collapse-label");
//       optionTab.current.classList.remove("null-container");
//       setshow("yes");
//     } else {
//       optionTab.current.classList.add("null-container");
//       optionTab.current.classList.remove("collapse-label");
//       setshow("no");
//     }
//   };

//   const City = ["Karachi", "Hyderabad", "Lahore", "Islamabad", "peshawar"];

//   const searchSubmitHandler = (e) => {
//     e.preventDefault();
//     // console.log("function called:)")
//     // history.push("/sell");
//     if (keyword.trim()) {
//       history.push(`/sell/&city=${keyword}`);
//     } else {
//       history.push("/");
//     }
//   };

//   return (
//     <div className="Search-container">
//       <h1>Search Properties for Sale</h1>
//       <form onSubmit={searchSubmitHandler}>
//         <div className="options-container">
//           <div className="first-row">
//             <div className="drop-down">
//             <label for="City"> City </label>

//             <select onChange={(e) => setKeyword(e.target.value)}>
//                 <option value="">City</option>
//                 {City.map((cate) => (
//                   <option key={cate} value={cate}>
//                     {cate}
//                   </option>
//                 ))}
//               </select>

//               {/* <select name="City" id="City">
//                 <option value="Karachi">Karachi</option>
//                 <option value="Hyderabad">Hyderabad</option>
//                 <option value="Lahore">Lahore</option>
//                 <option value="Islamabad">Islamabad</option>
//               </select> */}
//             </div>

//             <input
//               type="text"
//               placeholder="Location"
//               className="collapse-label"
//               onClick={(e) => switchTabs(e, show)}
//             />
//             {/* <button type="submit">FIND</button> */}
//         <input type="submit" value="Search" />

//           </div>

//           <div className="second-row null-container" ref={optionTab}>
//             <div className="drop-down">
//               <label for="Purpose"> Purpose </label>
//               <select name="Purpose" id="Purpose">
//                 <option value="Buy property">Buy property</option>
//                 <option value="Sell property">Sell property</option>
//                 <option value="Rent property">Rent property</option>
//               </select>
//             </div>

//             <div className="drop-down">
//               <label for="Price"> Price </label>
//               <div className="min-max">
//                 <select
//                   name="Min"
//                   className="price-box"
//                   id="Price-1"
//                   placeholder="Min"
//                 >
//                   <option value="">0</option>
//                   <option value="">500000</option>
//                   <option value="">1000000</option>
//                   <option value="">5000000</option>
//                   <option value="">10000000</option>
//                   <option value="">20000000</option>
//                   <option value="">50000000</option>
//                 </select>
//                 <p>to</p>
//                 <select
//                   name="Max"
//                   className="price-box"
//                   id="Price-2"
//                   placeholder="Max"
//                 >
//                   <option value="">Max</option>
//                   <option value="">0</option>
//                   <option value="">500000</option>
//                   <option value="">1000000</option>
//                   <option value="">5000000</option>
//                   <option value="">10000000</option>
//                   <option value="">20000000</option>
//                   <option value="">50000000</option>
//                 </select>
//               </div>
//             </div>

//             <div className="drop-down">
//               <label for="Area"> Area (Marla)</label>
//               <div className="min-max">
//                 <select name="Min" className="area-box" id="Area-1">
//                   <option value="">0</option>
//                   <option value="">2</option>
//                 </select>

//                 <p>to</p>
//                 <select name="Max" className="area-box" id="Area-2">
//                   <option value="">2</option>
//                   <option value="">0</option>
//                   <option value="">2</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Search;
