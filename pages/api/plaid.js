// here is where we will add all the plaid api calls to get transactions
import plaid from 'plaid';

const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET_SANDBOX;

let ACCESS_TOKEN = null;
let ITEM_ID = null;

// Initialize the Plaid client
const client = new plaid.Client(
    PLAID_CLIENT_ID,
    PLAID_SECRET,
    plaid.environments[PLAID_ENV],
    { version: '2020-09-14', clientApp: 'Plaid Quickstart' }
  );

export default async function handler(req, res) {
    
    res.status(200).json({ name: 'John Doe' })
  }