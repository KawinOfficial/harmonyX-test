const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Check api routes."));

router.post("/number-integer", (req, res) => {
  const { array, target } = req.body;

  const indexOfTarget = (array, target) => {
    for (var i = 0; i < array.length; i++) {
      for (var j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  };

  const index = indexOfTarget(array, target);
  res.send({ result: index });
});

router.post("/vending-machine", (req, res) => {
  const { price, money } = req.body;
  const exchangeType = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
  const value = {
    1000: 0,
    500: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
  };

  const calExchange = (price, pay) => {
    if (pay > price) {
      let diff = pay - price;
      const exchangeValue = [];
      for (var i = exchangeType.length - 1; i >= 0; i--) {
        while (diff >= exchangeType[i]) {
          exchangeValue.push(exchangeType[i]);
          diff = diff - exchangeType[i];
        }
      }

      exchangeValue.forEach((ex) => (value[ex] = value[ex] + 1));
      return value;
    } else {
      return "Not enough money.";
    }
  };

  const result = calExchange(price, money);
  res.send({ diffPay: money - price, result: result });
});

module.exports = router;
