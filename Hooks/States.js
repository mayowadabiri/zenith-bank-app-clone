import { useState } from "react";

const operators = () => {
  const [Operators, setOperators] = useState([
    {
      id: 1,
      active: true,
      text: "9mobile",
      image: Images.eitsalat,
      bgColor: "#010101",
    },
    {
      id: 2,
      active: false,
      text: "Airtel",
      image: Images.airtel,
      bgColor: "#f60001",
    },
    {
      id: 3,
      active: false,
      text: "MTN",
      image: Images.mtn,
      bgColor: "#fec42c",
    },
    { id: 4, active: false, text: "GLO", image: Images.glo, bgColor: "green" },
  ]);

  return [Operators, setOperators];
};

export default operators;
