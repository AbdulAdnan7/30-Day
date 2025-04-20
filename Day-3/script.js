const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "If you are working on something exciting, it will keep you motivated.",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    "Your limitation—it’s only your imagination.",
    "Sometimes later becomes never. Do it now.",
    "Great things never come from comfort zones."
  ];
  

  const quoteDisplay = document.getElementById('quote');
  const button = document.getElementById('new-quote');

  button.addEventListener("click", () => {
    const ranodmQuotes =Math.trunc(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[ranodmQuotes];
  })