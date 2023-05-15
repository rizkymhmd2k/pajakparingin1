import { google } from "googleapis";
import keys from "../../../../key";

export default async function handler(req, res) {
  try {
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
      range: "Database!B:O",
    };

    console.log("Sending request to Google Sheets API...");
    const data = await gsapi.spreadsheets.values.get(opt);

    console.log("Received response from Google Sheets API: ", data);

    const permohonans = data.data.values
      .filter((value) => value[1] === npwp)
      .map((value) => value[13]);

    const nama = data.data.values
      .filter((value) => value[1] === npwp)
      .map((value) => value[1]);

    if (permohonans.length === 0) {
      console.log(`No phone numbers found for NPWP ${npwp}`);
      return res.status(404).json({ error: true, message: "No phone numbers found" });
    }

    console.log(`Data for NPWP ${npwp}: `, nama[0], permohonans);
    return res.status(200).send(JSON.stringify({ error: false, data: {nama: nama[0], permohonans: permohonans} }));


  } catch (e) {
    console.error("Error occurred while fetching data from Google Sheets API: ", e);
    return res.status(400).send(JSON.stringify({ error: true, message: e.message }));
  }
}
