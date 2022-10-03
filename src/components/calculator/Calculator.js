import React, { useState, useEffect } from "react";
import Styles from "./Calculator.module.css";

export const Calculator = () => {
  const [selectedNumbers, setData] = useState([]);
  const [selectedSign, setSign] = useState(null);
  const [firstAddition, setFirstAddition] = useState(null);
  const [secondAddition, setSecondAddition] = useState(null);
  const [selectedNumber, selectNumber] = useState(null);

  const numbers = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
    { id: 6, value: 6 },
    { id: 7, value: 7 },
    { id: 8, value: 8 },
    { id: 9, value: 9 },
    { id: 0, value: 0 },
  ];

  const signs = [
    { id: 1, value: "+" },
    { id: 2, value: "-" },
    { id: 3, value: "/" },
    { id: 4, value: "X" },
    { id: 5, value: "AC" },
  ];

  const getSelectedItem = (number) => {
    selectNumber(number);
    if (selectedNumbers === 0) {
      setData([]);
      selectNumber(0);
    }
    setData((prevNumbers) => {
      if (typeof prevNumbers === "number") {
        prevNumbers = [prevNumbers];
        return [prevNumbers];
      } else {
        return [...prevNumbers, number];
      }
    });
  };

  const getSelectedSign = (id) => {
    if(id === 5) {
      selectNumber(0);
    }
    if (typeof selectedNumbers === "number") {
      setFirstAddition(selectedNumbers);
      setSign(id);
    } else {
      setFirstAddition(Number(selectedNumbers.join("")));
      setSign(id);
    }
  };

  const calculateNumbers = () => {
    switch (selectedSign) {
      case 1:
        setData(firstAddition + secondAddition);
        break;
      case 2:
        setData(firstAddition - secondAddition);
        break;
      case 3:
        setData(firstAddition / secondAddition);
        break;
      case 4:
        setData(firstAddition * secondAddition);
        break;
      case 5:
        setData(0);
        break;
      default:
        setData([]);
    }
  };

  useEffect(() => {}, [selectedNumbers]);

  useEffect(() => {
    setData([]);
  }, [firstAddition]);

  useEffect(() => {
    if (secondAddition !== 0) {
      calculateNumbers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondAddition]);

  useEffect(() => {
    if (selectedSign === 5) {
      setData(0);
    }
  }, [selectedSign]);
  useEffect(() => {}, [selectedNumber]);

  return (
    <div className={Styles.cover}>
      <div className={Styles.wrapper}>
        {numbers.map((number, index) => (
          <div
            key={index}
            className={`${Styles.box} ${
              selectedNumber === number.id && Styles.active
            }`}
            onClick={() => getSelectedItem(number.value)}
          >
            {number.value}
          </div>
        ))}
        {signs.map((number, index) => (
          <div
            key={index}
            className={Styles.box}
            onClick={() => getSelectedSign(number.id)}
          >
            {number.value}
          </div>
        ))}
        <div
          className={Styles.box}
          onClick={() => setSecondAddition(Number(selectedNumbers.join("")))}
        >
          =
        </div>
        <div className={Styles.box1}>{selectedNumbers}</div>
      </div>
    </div>
  );
};
