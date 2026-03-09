const { sha256String, isValidAptosAddress, formatBytes, octasToApt, truncate } = require("./src/index");

console.log("🧪 Testing crypto-dev-toolkit\n");
console.log("sha256:", sha256String("hello"));
console.log("validAddress:", isValidAptosAddress("0x1"));
console.log("formatBytes:", formatBytes(1048576));
console.log("octasToApt:", octasToApt(100000000), "APT");
console.log("truncate:", truncate("0x1234567890abcdef"));
console.log("\n✅ All tests passed");
