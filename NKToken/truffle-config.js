module.exports = {

  networks: {
    development: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "*", // Conecta a qualquer rede
    },
  },


  mocha: {
  },

  compilers: {
    solc: {
      version: "0.8.21",
    }
  },

};
