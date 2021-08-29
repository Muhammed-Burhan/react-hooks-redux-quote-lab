import React from "react";
import { useDispatch } from "react-redux";
import { upvoteQuote, downvoteQuote, removeQuote } from "./quotesSlice";
function QuoteCard({ quote }) {
  const { content, author, id, votes } = quote;
  const dispatch = useDispatch();
  function handleUpVote(ids) {
    dispatch(upvoteQuote(ids));
  }
  function handleDownVote(ids) {
    dispatch(downvoteQuote(ids));
  }
  function handleRemoveQuote(ids) {
    dispatch(removeQuote(ids));
  }
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{content}</p>
            <footer>
              - author <cite title="Source Title">{author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleUpVote(id)}
            >
              Upvote
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleDownVote(id)}
            >
              Downvote
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleRemoveQuote(id)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
