async (req, res) => {
    const response = await fetch('https://medium.com/@benjamin.mizrany/feed');
    const text = await response.text();
    res.status(200).send(text);
  };
  