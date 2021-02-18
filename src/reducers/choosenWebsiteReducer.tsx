const initialState = {
  scraper: "jebzdzidy",
};

export const choosenWebsiteReducer = (state = initialState, action: any) => {
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

export const chooseWebsite = (website: string) => {
  return {
    type: "CHANGE_SCRAPER",
    payload: {
      scraper: website,
    },
  };
};
