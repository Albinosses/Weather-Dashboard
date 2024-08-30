const errors = {
  default: "An error occurred while processing your request.",
  badResponse: "Could not get cities.",
};

//Universal request handler
const apiRequestHook = async (url, method, headers) => {
  const result = {
    error: null,
    data: null,
  };

  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  try {
    const response =
      method === "GET" ? await fetch(url) : await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(errors.badResponse);
    }

    const data = await response.json();

    if (data?.error) {
      result.data = null;
      result.error = data.error;
      result.loading = false;
      return result;
    }

    result.data = data;
    result.loading = false;

    return result;
  } catch (error) {
    result.error = {
      message: error.message || errors.default,
    };
    result.loading = false;

    return result;
  }
};

export default apiRequestHook;
