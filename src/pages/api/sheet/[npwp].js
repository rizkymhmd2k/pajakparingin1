import { google } from "googleapis";
import keys from "../../../../key";


export default async function handler(req, res) {

  try {
    // const npwp = '123'; // Client-side input

    const { npwp } = req.query;

    console.log('npwpquery', npwp);

    const client = new google.auth.JWT(
      keys.client_email,
      null,
      keys.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    await new Promise((resolve, reject) => {
      client.authorize(function (err, tokens) {
        if (err) {
          console.error("Error occurred while authorizing client: ", err);
          reject(err);
        } else {
          console.log("Successfully authorized client");
          resolve();
        }
      });
    });

    const gsapi = google.sheets({ version: "v4", auth: client });

    const opt = {
      spreadsheetId: "1AMMrsRcQBSc1NQc21Gz1N8iUoSeO-mOOr30SXk8mYCQ",
      range: "Database!C:O",

    };

    console.log("Sending request to Google Sheets API...");
    const data = await gsapi.spreadsheets.values.get(opt);

    console.log("Received response from Google Sheets API: ", data);

    const phoneNumbers = data.data.values
      .filter((value) => value[0] === npwp)
      .map((value) => value[12]);

    if (phoneNumbers.length === 0) {
      console.log(`No phone numbers found for NPWP ${npwp}`);
      return res.status(404).json({ error: true, message: "No phone numbers found" });
    }

    console.log(`Phone numbers for NPWP ${npwp}: ${phoneNumbers.join(", ")}`);
    return res
      .status(200)
      .send(JSON.stringify({ error: false, data: phoneNumbers }));
  } catch (e) {
    console.error(
      "Error occurred while fetching data from Google Sheets API: ",
      e
    );

    return res
      .status(400)
      .send(JSON.stringify({ error: true, message: e.message }));
  }
}
