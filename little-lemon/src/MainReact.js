import { useReducer } from "react";
import BookingForm from "./BookingForm";

const Main = () => {
  const updateTimes = (state = initializeTimes(), action) => {
    switch (action.type) {
      case "17:00":
        state = { state: "17:00" };
        break;
      case "18:00":
        state = { state: "18:00" };
        break;
      case "19:00":
        state = { state: "19:00" };
        break;
      case "20:00":
        state = { state: "20:00" };
        break;
      case "21:00":
        state = { state: "21:00" };
        break;
      case "22:00":
        state = { state: "22:00" };
        break;
      default:
        console.log("default answer", state);
    }
    return state;
  };

    const initializeTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

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

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  return <BookingForm dispatch={dispatch} initializeTimes={initializeTimes} />;
};

export default Main;
