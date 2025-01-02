# Advice Generator

Thi is a simple application that fetches and displays random advice for users. This project leverages an API to retrieve advice dynamically, providing users with quick and motivational snippets to brighten their day or offer guidance.

![Project image](advice-generator-app-main/design/desktop-design.jpg)

## Features

- Fetch random advice from an API.
- Display advice in a clean, user-friendly interface.
- Refresh the advice with the click of a button.
- Responsive design for use on various devices.

## Technologies Used

- **HTML**: For the structure of the application.
- **CSS**: For styling and layout.
- **JavaScript**: For functionality and interaction.
- **Advice Slip API**: For fetching advice.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AlexCristea2007/Advice-generator-app.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd Advice-generator-app
   ```

3. **Open the Application**
   Open the `index.html` file in your web browser.

## Usage

1. Load the application in your web browser.
2. Click the "Get Advice" button to fetch a new piece of advice.
3. Read, enjoy, and reflect on the advice provided!

## API Details

This project uses the [Advice Slip API](https://api.adviceslip.com/advice) to fetch random advice.

### Example API Request
```bash
GET https://api.adviceslip.com/advice
```
### Example Response
```json
{
  "slip": {
    "id": 123,
    "advice": "Always be kind to others."
  }
}
```
