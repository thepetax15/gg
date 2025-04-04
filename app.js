// ===== Wallet Connection =====
const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      const walletBtn = document.getElementById('connectWallet');
      const walletText = document.getElementById('walletText');
      const walletAddress = document.getElementById('walletAddress');
      
      // Display shortened address
      const shortAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
      
      walletText.style.display = 'none';
      walletAddress.textContent = shortAddress;
      walletAddress.style.display = 'inline';
      
      walletBtn.classList.add('connected');
      
      // Check balance (requires Web3.js)
      // getBalance(accounts[0]);
      
    } catch (error) {
      console.error("Wallet connection failed:", error);
      alert("Connection failed. Please try again.");
    }
  } else {
    alert("Please install MetaMask or another Web3 wallet!");
  }
};

document.getElementById('connectWallet').addEventListener('click', connectWallet);

// ===== Copy Contract Address =====
function copyContract() {
  const contractAddress = "YOUR_CONTRACT_ADDRESS";
  navigator.clipboard.writeText(contractAddress);
  
  alert("Contract address copied to clipboard!");
}

// ===== FAQ Accordion =====
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// ===== Initialize CoinGecko Chart =====
function loadCoinGeckoChart() {
  const script = document.createElement('script');
  script.src = 'https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js';
  document.body.appendChild(script);
}

window.onload = loadCoinGeckoChart;
