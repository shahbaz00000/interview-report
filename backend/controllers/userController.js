const { oauth2client } = require("../config/gooleAuth.js");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const sql = require("../config/db.js");

const createToken = (userId) =>
  jwt.sign({ userId }, process.env.JWT_SECRET || "secretkey", {
    expiresIn: "1h",
  });

const login = async (req, res) => {
  try {
    const { email, password, code } = req.body;

    console.log("Incoming Data:", req.body);

    if (code) {
      try {
        const googleRes = await oauth2client.getToken(code);
        const tokens = googleRes.tokens;

        oauth2client.setCredentials(tokens);

        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokens.access_token}`,
            },
          }
        );

        const { name, email:googleEmail } = userInfo.data;

        let user = await sql`
          SELECT * FROM users WHERE email = ${googleEmail}
        `;
        let statusCode = 200;

        if (user.length === 0) {
          statusCode = 201;
          user = await sql`
            INSERT INTO users (name, email)
            VALUES (${name}, ${googleEmail})
            RETURNING *
          `;
        }
        const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
        return res.status(statusCode).json({message:"google login successfully", user: user[0], token });
      } catch (err) {
        console.log("Google Error:", err.message);
        return res.status(500).json({ message: "Google login failed" });
      }
    }

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await sql`
      SELECT * FROM users WHERE email = ${email} AND password = ${password}
    `;

    if (user.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
    return res.status(200).json({ message: "Login successful", user: user[0], token });
  } catch (error) {
    console.log("SERVER ERROR:", error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = login;
