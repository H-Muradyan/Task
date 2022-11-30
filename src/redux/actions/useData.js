import { useDispatch } from "react-redux";
import { getData } from "../../api/data";

const useData = () => {
  const dispatc = useDispatch();

  const getAllData = async (skip) => {
    try {
      const res = await getData(skip);
      if (res.data) {
        dispatc({
          type: "GET_DATA",
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { getAllData };
};

export default useData;
