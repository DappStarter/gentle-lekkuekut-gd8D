require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan renew noble hope install clip tail true'; 
let testAccounts = [
"0x65b3e39099a902d1b33a6742982a56e69b18859aa048ab365751038aa31c201f",
"0x60866a7effa0a8ba5c485d3a95bce44025eeff7e3647f5a925ee1b6d253490ee",
"0x4ebc88782238f59a2a6372f02c2cf843df84a5be1266d023439b72a249405162",
"0x91d304fb9d94bbc4a66a33d4f9f72718add5a835c555aecf2bf1f66e3e8caabd",
"0xf558b43487dda8855c0f7b4cea7592aac95f7fd1beb0e16f510a93fb5f995d2b",
"0x2742bcded7f77ef7ad43e3dfcd8f55f33b6168346ae602289786ce4964ab5d64",
"0xd7554e65e3afffd8a37f2b38daa2012acd266eda100b0446c916bfa3b3bce9a6",
"0xd05466b8eede2246c5cacc432b9390898c771c1fcb436fcd55f6130b676900ea",
"0xba3b8b4c310bcf3b06e464a0aace9cc2339c7883c4b7991b56335fa4278fb307",
"0x0c314f1d60a41560ea7ebd4e53f5e76bceb7049476252d4c3caef074805a4fa2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

