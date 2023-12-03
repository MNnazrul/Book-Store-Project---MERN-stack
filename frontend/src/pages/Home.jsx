import React, { useEffect, useState } from "react";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(CSSFontFeatureValuesRule);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3003/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <></>
    </>
  );
}

export default Home;
