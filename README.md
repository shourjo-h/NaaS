# No-as-a-Service

A simple web application that fetches a "No" response from an external API and displays it on the page.

## Features

- Fetches a "No" response from the API: `https://naas.isalman.dev/no`.
- Displays the response dynamically on the webpage.
- Styled with a clean, dark theme for a modern look.

## Project Structure

naas/ ├── index.html # Main HTML file ├── icons8-cloud-cross.gif # Favicon for the website └── README.md # Project documentation


## How to Use

1. Clone the repository or download the files.
2. Open the `index.html` file in your browser.
3. The page will display a "No" response fetched from the API.

## Deployment

This project is deployed on [Netlify](https://www.netlify.com/). To deploy it yourself:

1. Drag and drop the project folder into the Netlify dashboard.
2. Ensure the `index.html` file is in the root directory.
3. Visit the deployed URL to see the application in action.

## Troubleshooting

### CORS Issue
If you encounter a CORS error while fetching the API response, you can:
- Use a proxy server like [CORS Anywhere](https://cors-anywhere.herokuapp.com/).
- Create a Netlify Function to act as a proxy for the API.

### API Unavailability
If the API is down or unreachable, the page will display the fallback message:  
`"Oops! The API said 'No' too."`

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Inline styles for a dark-themed design.
- **JavaScript**: Fetch API to retrieve data dynamically.

## License

This project is open-source and available under the MIT License.