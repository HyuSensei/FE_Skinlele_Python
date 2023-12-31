const axios = require("axios");
const handleRate = async (req, res) => {
  try {
    let userId = req.cookies.UserId;
    let orderId = req.body.order_id;
    let data = await axios.post(process.env.BASE_URL + `rate`, req.body);
    if (data.data.success === false) {
      req.flash("erro", `${data.data.message}`);
    }
    return res.redirect(`/rateOrder/user=${userId}/order=${orderId}`);
  } catch (error) {
    console.log(error);
  }
};

const productRate = (req, res) => {};

module.exports = {
  handleRate,
  productRate,
};
