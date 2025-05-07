# No-as-a-Service (NaaS)

A simple web application that fetches a "No" response from an external API and displays it on the page.

## Features

- Fetches a "No" response from the API: `https://naas.isalman.dev/no`.
- Displays the response dynamically on the webpage.
- Styled with a clean, dark theme for a modern look.

## Project Structure

```
NaaS/
├── index.html                # Main HTML file
├── icons8-cloud-cross.gif    # Favicon for the website
├── netlify/
│   └── functions/
│       └── getReason.js      # Netlify Function to fetch API data
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

## How to Use

1. Clone the repository or download the files:
   ```bash
   git clone https://github.com/shourjo-h/NaaS.git
   cd NaaS
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Open the `index.html` file in your browser to view the application.

## Deployment

This project is deployed on Netlify. To deploy it yourself:

1. Drag and drop the project folder into the Netlify dashboard.
2. Ensure the `index.html` file is in the root directory.
3. Visit the deployed URL to see the application in action.

## Attribution
The API used in this project (https://naas.isalman.dev/no) was created and hosted by hotheadhacker. Full credit goes to them for providing this service.

## Troubleshooting

### CORS Issue
If you encounter a CORS error while fetching the API response, you can:

- Use a proxy server like [CORS Anywhere](https://cors-anywhere.herokuapp.com/).
- Create a Netlify Function to act as a proxy for the API.

### Function Crashes
If the Netlify Function crashes, ensure:

- `node-fetch` is installed as a dependency in `package.json`.
- The function code uses `require` for `node-fetch` (compatible with version 2.x).

### API Unavailability
If the API is down or unreachable, the page will display the fallback message:
> "Oops! The API said 'No' too."

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Inline styles for a dark-themed design.
- **JavaScript**: Fetch API to retrieve data dynamically.
- **Netlify Functions**: Serverless functions for API proxying.

## License

This project is open-source and available under the [MIT License](https://github.com/shourjo-h/NaaS/blob/d7f7d7a13d84a8cc25159eef72d1e2eed90e3602/LICENSE).