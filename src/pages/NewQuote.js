import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const AddQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push("/quotes");
  };
  return (
    <section>
      <h1>Add a new quote</h1>
      <QuoteForm onAddQuote={AddQuoteHandler} />
    </section>
  );
};

export default NewQuote;
