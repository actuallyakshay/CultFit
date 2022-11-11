import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/GetData/getData.actions";

function Mens() {
  const route = useSelector((state) => state?.button?.route);
  const data = useSelector((state) => state?.getData?.data);
  const [temp, setTemp] = useState([]);
  const dispatch = useDispatch();
  console.log({ data });

  useEffect(() => {
    dispatch(getData("mens"));
  }, []);
  console.log({ route });

  console.log({ data });

  return <div>Mens</div>;
}

export default Mens;
