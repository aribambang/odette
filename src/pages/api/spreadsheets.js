import { google } from 'googleapis';

const spreadSheet = async (req, res) => {
  try {
    const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Pesan',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [req.body.value],
      },
    });

    if (response.status === 200) {
      res.status(200).json({ statusText: 'Ok' });
    } else {
      res.status(500).json({ statusText: 'Internal Server Error' });
    }
  } catch (err) {
    res.status(500).json({ statusText: 'Internal Server Error' });
  }
};

export default spreadSheet;
