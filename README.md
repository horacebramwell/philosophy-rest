# Philosophy.rest

Philosophy.rest is a free REST API that serves random quotes from various philosophers. Inspired by kanye.rest, this project aims to provide a simple and accessible way to obtain random philosophical quotes for educational, inspirational, or entertainment purposes.

## Features

- Fetch random quotes from a diverse range of philosophers.
- Display quotes in a user-friendly web interface.
- Tweet quotes directly from the application.
- Refresh the quote to get a new one.
- View a list of all available quotes in an accordion style.

## Live Demo

You can check out the live demo of the project [here](https://philosophy.rest).

## Screenshots

### Main Page

![Main Page](https://philosophy.rest/screenshot.png)


## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js
- npm (or yarn)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/horacebramwell/philosophy-rest.git
```

2. Navigate to the project directory:

```bash
cd philosophy-rest
```

3. Install dependencies:

```bash
npm install
```

### Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## API Endpoints

### Get a Random Quote

```http
GET /api
```

**Response:**

```json
{
"philosopher": "Epicurus",
"quote": "It is impossible to live a pleasant life without living wisely and well and justly, and it is impossible to live wisely and well and justly without living a pleasant life.",
"school": "Epicureanism"
}
```


## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.


