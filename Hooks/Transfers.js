import React, {useState} from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";


const TransferModes = () => {
  const [modes, setModes] = useState([
    {
      id: 1,
      title: "Own Account",
      logo: () => <AntDesign name="user" size={20} color="red" />,
      active: true,
    },
    {
      id: 2,
      title: "Zenith Account",
      logo: () => <AntDesign name="user" size={20} color="red" />,
      active: false,
    },
    {
      id: 3,
      title: "Other Banks",
      logo: () => <AntDesign name="user" size={20} color="red" />,
      active: false,
    },
    {
      id: 4,
      title: "Foreign Account",
      logo: () => <AntDesign name="user" size={20} color="red" />,
      active: false,
    },
    {
      id: 5,
      title: "Unknown Account",
      logo: () => <AntDesign name="user" size={20} color="red" />,
      active: false,
    },
  ]);

  return [modes, setModes];
};

export default TransferModes;
