const crypto = require("crypto");

const sha256String = (str) => crypto.createHash("sha256").update(str).digest("hex");
const sha256Buffer = (buf) => crypto.createHash("sha256").update(buf).digest("hex");

const isValidAptosAddress = (a) => /^0x[0-9a-fA-F]{1,64}$/.test(a);
const isValidEthAddress   = (a) => /^0x[0-9a-fA-F]{40}$/.test(a);
const truncate = (address, chars = 4) => `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
const normalizeAptos = (address) => "0x" + address.replace("0x", "").padStart(64, "0");

const formatBytes = (bytes) => {
  if (bytes === 0) return "0 B";
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};
const aptToOctas      = (apt) => Math.floor(apt * 1e8);
const octasToApt      = (octas) => (octas / 1e8).toFixed(6);
const shortenHash     = (hash, chars = 8) => `${hash.slice(0, chars)}...${hash.slice(-chars)}`;
const formatTimestamp = (micros) => new Date(micros / 1000).toLocaleString();

module.exports = {
  sha256String, sha256Buffer,
  isValidAptosAddress, isValidEthAddress, truncate, normalizeAptos,
  formatBytes, aptToOctas, octasToApt, shortenHash, formatTimestamp,
};
