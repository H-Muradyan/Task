import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useSelector } from "react-redux";
import useData from "../redux/actions/useData";
import ImageCard from "./ImageCard";

const Home = () => {
  const datas = useSelector((data) => data.data);
  const [skip, setSkip] = useState(0);
  const arr = [];
  const [pages, setPages] = useState(arr.length || null);
  const [currentPage, setCurrentPage] = useState(1);

  const { getAllData } = useData();

  const allPages = () => {
    if (!arr.length) {
      for (let i = 1; i <= 10; i++) {
        arr.push(i);
      }
      setPages(arr);
    }
  };

  useEffect(() => {
    setSkip(currentPage * 10 - 10);
    getAllData(skip);
    allPages();
  }, [skip, currentPage]);

  const getMoreData = (e) => {
    setCurrentPage(+e.target.innerText);
  };

  const goNext = () => {
    if (pages.length > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {datas.state &&
        datas.state.products.length &&
        datas.state.products.map((data) => {
          return <ImageCard key={data.id} data={data} />;
        })}
      <Pagination>
        <Pagination.Prev onClick={goBack} />
        {pages &&
          pages.map((elem, index) => {
            return (
              <Pagination.Item
                className={elem === currentPage && "active"}
                onClick={getMoreData}
                key={index}
              >
                {elem}
              </Pagination.Item>
            );
          })}

        <Pagination.Next onClick={goNext} />
      </Pagination>
    </>
  );
};

export default Home;
