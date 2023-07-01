import { useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./api";

const Main = () => {
  /*    const initializeTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]; */

  /*   const todaysDate = new Date();
  const today = todaysDate.getDate();

  const initializeTimes = () => {
    
      const response = fetch(
        "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
      ).then((response) => response.json());
      response.fetchData(today);
      console.log(response);
      const response = fetchAPI(today)
    return response;
  }; */

  const today = new Date();

  const [formData, setFormData] = useState({
    date: today,
    guests: "1",
    time: "",
    occasion: "None",
    requests: "",
    fname: "",
    lname: "",
    email: "",
  });

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      console.log(formData);
      setFormData({
        date: today,
        guests: "",
        time: "",
        occasion: "None",
        requests: "",
        fname: "",
        lname: "",
        email: "",
      });
    }
  };

  const initializeTimes = () => {
    const availableTimes = fetchAPI(today);

    return {
      selectedTime: null,
      availableTimes: availableTimes,
    };
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "SELECT_TIME":
        return {
          ...state,
          selectedTime: action.payload,
        };
      case "SELECT_DATE":
        return {
          ...state,
          availableTimes: fetchAPI(action.payload),
        };
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <BookingForm
      dispatch={dispatch}
      initializeTimes={initializeTimes}
      availableTimes={availableTimes}
      submitForm={submitForm}
      formData={formData}
      setFormData={setFormData}
    />
  );
};

export default Main;
