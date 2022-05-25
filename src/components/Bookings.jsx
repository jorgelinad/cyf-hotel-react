import React, { useState, useEffect } from "react";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [initialBookings, setInitialBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "https://cyf-react.glitch.me/delayed";

  const search = searchVal => {
    if (searchVal.length === 0) {
      setBookings(initialBookings);
      return;
    }

    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
  };

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(data => data.json())
      .then(json => {
        setBookings(json);
        setInitialBookings(json);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.error);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <h1>Cargando...</h1>
  ) : (
    <div className="App-content">
      {bookings ? (
        <div className="container">
          <h2>{error}</h2>
          <Search search={search} />
          {<SearchResults results={bookings} />}
        </div>
      ) : null}
    </div>
  );
};

export default Bookings;
