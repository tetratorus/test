const Web3Modal = require("web3modal").default;
const Torus = require("@toruslabs/torus-embed");
const Web3 = require("web3");

const providerOptions = {
  torus: {
    package: Torus, // required
    options: {
      networkParams: {
        // host: "https://localhost:8545", // optional
        // chainId: 1337, // optional
        // networkId: 1337, // optional
      },
      config: {
        buildEnv: "production", // optional
      },
    },
  },
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

(async function() {
  const provider = await web3Modal.connect();
  
  const web3 = new Web3(provider);
  window.w = web3
})()
