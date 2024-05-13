import {API_URL} from '../helper/constant';

const customFetch = async method => {
  const url = API_URL;

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, options);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return error;
  }
};

export default customFetch;
