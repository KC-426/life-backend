const Enquiry_Schema = require("../modals/Enquiry");

const makeEnquiry = async (req, res) => {
  try {
    console.log("Start");
    const {medicine, name, email, phone_no, country, message, product_id } = req.body;
    console.log(req.body)

    if (!name || !phone_no || !product_id || !medicine || !email || !country) {
      res.status(400).json({
        success: false,
        message: "Please Fill All The Required Fields",
      });
    }

    const enquiry_data = new Enquiry_Schema({
      // product_id: 
      medicine: medicine, 
      name: name,
      email: email, 
      phone_no: phone_no,
      country: country,
      message: message,
      product_detail: product_id,
    });

    const result = await enquiry_data.save();
    console.log(result)

    res.status(200).json({ message: "Data saved !!", result: result });
  } catch (err) {
    console.log(err);
    res.status(500).send("something went wrong !!");
  }
};


const getEnquiry = async (req, res) => {
try {
   const data = await Enquiry_Schema.find().populate('product_detail')
   res.status(200).json({message: 'Enquiry fethced !!', data: data})
}
catch(err) {
    console.log(err)
    return res.status(500).json({ message: "Internal Server Error !!" });
}
}
 
exports.makeEnquiry = makeEnquiry;
exports.getEnquiry = getEnquiry
