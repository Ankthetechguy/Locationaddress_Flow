let addresses = [];

exports.addAddress = (req, res) => {
  addresses.push(req.body);
  res.status(201).send({ message: "Address added!" });
};

exports.getAddresses = (req, res) => {
  res.send(addresses);
};
