const initialState = {
  scraper: "jebzdzidy",
};

const choosenWebsiteReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_SCRAPER":
      return {
        ...state,
        scraper: payload.scraper,
      };
    default:
      return state;
  }
};

export default choosenWebsiteReducer;
