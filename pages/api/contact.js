

export default function ContactFrom(req, res) {
  if (req.method === "POST") {
    const resData = req?.body;

    console.log("Request :", resData);

    return res.json({ msg: " Yuborildi" });
  }

  return res.status(500).json({
    msg: " THis needs to be a post request",
  });
}
