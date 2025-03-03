const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const calculateOrderTotal = (items) => {
  return items.reduce((total, item) => {
    const itemTotal = (item.price * item.quantity) / 100;
    return total + itemTotal;
  }, 0);
};

app.post('/pronature', (req, res) => {
  console.log('Items: ', req.body.rate.items);
  console.log('Request Body:', req.body.rate.items);
  
  const items = req.body.rate.items;

  const totalCost = calculateOrderTotal(items);

  res.status(200).json({
    success: true,
    message: "Request received successfully",
    receivedData: req.body,
    orderTotal: {
      amount: totalCost,
      currency: req.body.rate.currency
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running.`);
});