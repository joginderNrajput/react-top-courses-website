import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./data";
// import {Toast} from "react-toastify/dist/components";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  //  useEffect(()=>{
  //   const fetchData = async() =>{
  //     try{
  //       const res = await fetch(apiUrl);
  //       const output = await res.json();
  //       //save data into a variable
  //       setCourses(output.data);
  //       console.log(output);
  //     }catch(error){
  //       toast.error("Something went Wrong");
  //     }
  //   }
  //   fetchData();
  // }, [])
  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Network Error!");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App min-h-screen flex flex-col bg-bgDark bg-opacity-60">
      <div>
        <Navbar />
      </div>
      <div className="">
        <div>
          <Filter filterData={filterData} category = {category} setCategory = {setCategory} />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} category = {category} />}
        </div>
      </div>
    </div>
  );
};

export default App;
