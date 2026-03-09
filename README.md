# crypto-dev-toolkit

> Utility functions for Web3 developers building on Aptos and Shelby Protocol.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Web3](https://img.shields.io/badge/Web3-F16822?style=flat-square&logo=web3dotjs&logoColor=white)

## Features

- Hashing - SHA-256 for files, strings, and buffers
- Address utils - Validate and format Aptos/Ethereum addresses
- Formatters - Bytes, APT/Octas, timestamps, hashes

## Usage
```javascript
const { sha256String, isValidAptosAddress, formatBytes } = require("./src");

sha256String("hello world");   // b94d27b9...
isValidAptosAddress("0x1");    // true
formatBytes(1_048_576);        // 1.00 MB
```

## License
MIT
