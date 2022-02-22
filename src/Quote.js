import { useEffect, useState } from 'react';

import { Container } from './Quote.style';

import { quoteExample } from './cheatsheet';

// Api key: https://zenquotes.io/api/random
export const Quote = () => {
  const [quote, setQuote] = useState(quoteExample);

  useEffect(() => {
    fetch("https://zenquotes.io/api/random")
      .then(res => res.json())
      .then((data) => {
        const ctx = data[0];
        setQuote(ctx);
      }).catch(err => console.error(err))
  }, [])

  return (
    <Container>
      <blockquote>
        &ldquo;{quote.q}&rdquo;&mdash;
        <footer>{quote.a}</footer>
      </blockquote>
    </Container>
  )
}

