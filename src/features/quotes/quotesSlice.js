// Action Creators
export function addQuote(qoute) {
  return {
    type: "quotes/add",
    payload: qoute,
  };
}
export function removeQuote(quoteId) {
  return {
    type: "quotes/remove",
    payload: quoteId,
  };
}
export function upvoteQuote(quoteId) {
  return {
    type: "quotes/upvote",
    payload: quoteId,
  };
}
export function downvoteQuote(quoteId) {
  return {
    type: "quotes/downvote",
    payload: quoteId,
  };
}
// TODO: Create action creators as defined in tests

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];
    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload);
    case "quotes/upvote":
      return state.map((quote) =>
        quote.id === action.payload
          ? { ...quote, votes: quote.votes + 1 }
          : quote
      );
    case "quotes/downvote":
      return state.map((quote) =>
        quote.id === action.payload && quote.votes > 0
          ? { ...quote, votes: quote.votes - 1 }
          : quote
      );
    default:
      break;
  }
  return state;
}
