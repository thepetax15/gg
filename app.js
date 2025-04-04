// Wallet Connect
document.getElementById('connectWallet').addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      alert(`Connected: ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`);
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("Please install MetaMask!");
  }
});

// CoinGecko Widget (Replace with your token ID after listing)
const script = document.createElement('script');
script.src = 'https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js';
document.body.appendChild(script);
