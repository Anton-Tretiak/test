const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const calculateOrderTotal = (items) => {
  return items.reduce((total, item) => {
    const itemTotal = item.price * item.quantity;

    return total + itemTotal;
  }, 0);
};

app.post('/pronature', (req, res) => {
  console.log('Request Body:', req.body.rate.items);
  console.log('Items: ', req.body.rate.items);

  const currencyCode = req.body.rate.currency;
  const orderTotal = calculateOrderTotal(req.body.rate.items);

  res.status(200).json({
    "rates": [
      {
        "service_name": "Custom Shipping",
        "service_code": "custom-shipping",
        "total_price": `${orderTotal}`,
        "description": "This is the fastest option by far",
        "currency": `${currencyCode}`,
      }
    ]
 });
});

app.listen(port, () => {
  console.log(`Server is running.`);
});