import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "John", text: "Learning react is fun!" },
  { id: "q2", author: "Max", text: "Learning react is good!" },
  { id: "q3", author: "Washington", text: "Learning react is cool!" },
];

const Quotes = () => {
  return (
    <section>
      <QuoteList quotes={DUMMY_QUOTES} />
    </section>
  );
};

export default Quotes;
