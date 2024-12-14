# Front-End Recything
This is the front-end repository for the Recything project, a platform designed to help users report rubbish and littering incidents to earn coins. The platform also features an AI-powered chatbot and displays various articles. Additionally, it includes an admin feature that allows admins to review and approve or reject reports, create articles, and adjust user coin balances.

## Features
- Register and Login
- Reporting Rubbish and Littering
- About Us Page
- Articles Section
- FAQ and AI Chatbot
- Landing Page
- Manage User Details
- Manage Report Details
- Manage Articles
- Manage User Coins
- Admin Dashboard
- User Profile

## Technologies Used
- React = JavaScript library for building the user interface.
- Vite: Fast build tool for front-end projects.
- Tailwind CSS: Utility-first CSS framework used for styling the app’s UI.
- Axios: HTTP client for making requests to the backend API.
- Zustand: State management solution to handle the app’s global state.
- Zod Validation: A TypeScript-first schema validation library for data validation.
- Gemini AI: Google's advanced language models for AI-driven features like chatbots and content generation.
- ApexCharts: A library for creating interactive and customizable charts.
- React-icons: A library that provides popular icons as React components for easy use.
- SweetAlert: A customizable pop-up alert library for displaying messages with style.
- React-autosuggest: A component for providing type-ahead or autocomplete suggestions in forms and search fields.

## Installation
To set up the front-end Recything project on your local machine:
1. Clone the repository:
    ```
    git clone https://github.com/Recything-Capstone-2/front-end-recything.git
    ```
2. Navigate to the project folder:
    ```
    cd front-end-recything
    ```
3. Install the dependencies:
    ```
    npm install
    ```
4. Create a .env file in the root of the project with the following content:
    ```
    VITE_BASE_URL=YOUR_URL_API
    VITE_API_KEY_MAPS=your_maps_api_key_here
    VITE_GEMINI_API_KEY=your_gemini_api_key_here
    ```
    - Replace your_maps_api_key_here and your_gemini_api_key_here with the actual API keys when you have them.
    - Get API_MAPS from web [HERE.com](https://developer.here.com/)
    - Get GAPI_GEMINI from web [Gemini.com](https://ai.google.dev/gemini-api/docs/api-key)
5. Run the development server:
    ```
    npm run dev
    ```
    This will start the app on http://localhost:5137
    
## Scripts
- npm run dev: Starts the development server.
- npm run build: Builds the app for production.
- npm run preview: Previews the production build.
- npm run lint: Runs ESLint to check code quality.

## Figma Design
For the design mockups and UI/UX details of the Recything project, please refer to the [Figma Design](https://www.figma.com/design/t2tNlx9fIb6chrjfMYFf53/Hifi?node-id=1-2&p=f&t=q1n2Yd9yAVQeJx5S-0)

## Contributing
We welcome contributions to this project. If you want to contribute, please follow the standard GitHub pull request workflow:
- Fork the repository.
- Create a new branch for your feature or fix.
- Commit your changes.
- Push the branch to your fork.
- Create a pull request to the develop or main branch.

Please ensure that your code follows the project’s coding standards and passes all tests.