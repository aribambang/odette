import { google } from 'googleapis';

const getMessage = async () => {
  try {
    const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Pesan',
    });

    const rows = response.data.values;

    if (rows && rows.length > 0) {
      return rows.slice(Math.max(rows.length - 30, 1)).map((row) => ({
        name: row[1] || '',
        location: row[2] || '',
        who: row[3] || '',
        message: row[4] || '',
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
};

export default getMessage;
