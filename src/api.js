import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID wnAgTl5r5OGJsOPpuBZn18SqIv2vVFOQw8Cv1yj50wY",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
