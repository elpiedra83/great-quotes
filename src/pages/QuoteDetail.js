import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import classes from "./QuoteDetail.module.css";

const DUMMY_QUOTES = [
  { id: "q1", author: "John", text: "Learning react is fun!" },
  { id: "q2", author: "Max", text: "Learning react is good!" },
  { id: "q3", author: "Washington", text: "Learning react is cool!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <section>
      <Link className={classes.back} to="/quotes/">
        ⬅
      </Link>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
