import React, { useState } from 'react'
import './Style.css'
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
export default function Api() {
  const [p, setphoto] = useState("");
  const [results, setResult] = useState([]);
  let Changephoto = () => {
    axios
      .get(
       ` https://api.unsplash.com/search/photos?page=1&query=${p}&client_id=OcEefqj1eWQHdOH-HwL4UUWeCujk0UtbJ4ujnzrVcK0 `    )
      .then((response) => {
        console.log(response);
        setResult(response.data.results);
      });
  };
  return (
    <>
    <Header/>
      <div id='apisearch'>
      <label  className="form-label" style={{marginTop:'100px',fontWeight:'bolder',fontSize:'30px'}}>Name</label>
              <input
                type="text"
                className="form-control"
                style={{ width: "400px", marginBottom: "1.2rem",marginLeft:'550px',fontWeight:'bolder',border:'5px solid #00BFFF'}}
                value={p}
                onChange={(e) => {
                     setphoto(e.target.value);
                }}
              ></input>
              <button
                className="btn btn-primary"
                style={{ marginBottom: "4.5rem" }}
                onClick={Changephoto}
              >
                   Search
              </button>
              <ul
                style={{
                     justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                   {results.map((val) => {
                     return (
                       <motion.li
                      whileHover={{
                           rotate: 360,
                        scale: 1.5,
                        transition: { duration: 1 },
                      }}
                      style={{ display: "inline-block" }}
                    >
                         <img src={val.urls.small} height={200} width={200} alt="xyz" />
                    </motion.li>
                  );
         })}
       </ul>
      </div>
      <Footer/>
    </>
  )
}

