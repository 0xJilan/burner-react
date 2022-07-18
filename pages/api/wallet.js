import BN from "bn.js";

export default function handler(req, res) {
  res.status(200).json({
    tokens: [
      { name: "ETH", amount: new BN("dead", 16) },
      { name: "STRK", amount: new BN("dead", 16) },
    ],
  });
}
