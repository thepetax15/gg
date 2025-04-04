<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Good Girl ($GG) Token</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="assets/favicon.ico">
</head>
<body>
  <div class="container">
    <!-- Logo -->
    <div class="logo">
      <img src="assets/logo.png" alt="GG Token Logo">
    </div>

    <!-- Main Heading -->
    <h1>Good Girl ($GG)</h1>
    <p class="subtitle">The cutest meme token in crypto! 🐾</p>

    <!-- Wallet Connect Button -->
    <button id="connectWallet" class="btn-pink">Connect Wallet</button>

    <!-- Price Chart -->
    <div id="coingecko-chart" class="chart-container"></div>

    <!-- How to Buy Section -->
    <div class="buy-section">
      <h2>How to Buy $GG</h2>
      <ol>
        <li>Get ETH on Binance/Coinbase</li>
        <li>Connect MetaMask</li>
        <li>Swap on <a href="https://app.uniswap.org" target="_blank">Uniswap</a></li>
      </ol>
    </div>

    <!-- Footer -->
    <footer>
      <p>© 2024 Good Girl Token | Not financial advice</p>
      <div class="social-links">
        <a href="https://twitter.com/GoodGirlToken" target="_blank">Twitter</a>
        <a href="https://t.me/GoodGirlToken" target="_blank">Telegram</a>
      </div>
    </footer>
  </div>

  <script src="app.js"></script>
  <!-- CoinGecko Price Chart Widget -->
  <script src="https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js"></script>
</body>
</html>
