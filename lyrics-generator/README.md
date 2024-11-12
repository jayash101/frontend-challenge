## React Vite Lyrics Search App

This project demonstrates a React Vite application that allows users to search for song lyrics and artist information.

### Features

- Search for lyrics using artist and song title
- Utilize React Router DOM for routing between search form and results page
- Manage state with Redux Toolkit
- Use React Hook Form for user input validation and handling
- Fetch lyrics data using a third-party API (`https://api.lyrics.ovh/v1/${artist}/${songs}`)

### Prerequisites

- Node.js and npm (or yarn) installed

### Installation

1. Clone this repository:

```bash
git clone https://github.com/jayash101/frontend-challenge.git
```

2. Navigate to the project directory:

```bash
cd lyrics-search-app
```

3. Install dependencies:

```bash
npm install
```

### Running the application

1. Start the development server:

```bash
npm run dev
```

2. Open http://localhost:3000 in your browser.

### Usage

1. Enter the artist and song title in the search form.
2. Click the "Search Lyrics" button.
3. If lyrics are found, the artist and lyrics will be displayed below.

### Technologies Used

- React
- Vite
- Redux Toolkit
- React Hook Form
- Fetch API

### Contributing

Feel free to fork this repository and contribute your improvements.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
