const {keccak256} = require("ethereum-cryptography/keccak");
const {toHex} = require("ethereum-cryptography/utils");
const secp = require("ethereum-cryptography/secp256k1");

const privateKey = secp.secp256k1.utils.randomPrivateKey();

const publicKey = secp.secp256k1.getPublicKey(privateKey);

const address = toHex(keccak256(publicKey.slice(1)).slice(-20));

console.log(`Private Key: ${toHex(privateKey)} \nPublic Key: ${toHex(publicKey)} \nAddress: 0x${address}`);
