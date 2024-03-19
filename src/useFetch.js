import React from "react";

export default function useFetch(baseUrl, initialType) {
  const [data, setData] = React.useState(null);

  const fetchUrl = (type) => {
    fetch(baseUrl + "/" + type)
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  React.useEffect(() => {
    fetchUrl(initialType);
  }, []);

  return {
    data,
    fetchUrl,
  };
}
