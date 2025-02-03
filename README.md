# My Chat Bot

This project is a chat bot application built with React, TypeScript, and Vite. It uses OpenAI's API to generate responses based on user prompts.

## Project Structure

```
.env
.env.example
.gitignore
eslint.config.js
index.html
package.json
public/
README.md
src/
    hooks/
        use-chat.ts
    index.css
    interfaces/
        ai-response.d.ts
    main.tsx
    pages/
        chat-page.tsx
    services/
        ai-service.ts
    vite-env.d.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/AdrianYuu/my-chat-bot.git
   cd my-chat-bot
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Copy the `.env.example` file to `.env` and fill in your OpenAI API key and base URL:

   ```sh
   cp .env.example .env
   ```

   ```env
   VITE_OPENROUTER_API_KEY=your-api-key
   VITE_OPENROUTER_BASE_URL=your-base-url
   ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
# or
yarn dev
```

This will start the Vite development server and you can view the application at `http://localhost:5173`.

### Building for Production

To build the project for production, run:

```sh
npm run build
# or
yarn build
```

The production-ready files will be in the `dist` directory.

### Linting

To lint the project, run:

```sh
npm run lint
# or
yarn lint
```

### Previewing the Production Build

To preview the production build, run:

```sh
npm run preview
# or
yarn preview
```

## Project Details

### Hooks

- `useChat` ([src/hooks/use-chat.ts](src/hooks/use-chat.ts)): Custom hook to handle chat functionality.

### Services

- `getAIResponse` ([src/services/ai-service.ts](src/services/ai-service.ts)): Function to fetch AI response from the OpenAI API.

### Pages

- `ChatPage` ([src/pages/chat-page.tsx](src/pages/chat-page.tsx)): Main chat page component.

### Interfaces

- `AIResponse` ([src/interfaces/ai-response.d.ts](src/interfaces/ai-response.d.ts)): TypeScript interface for AI response.

### Configuration

- ESLint configuration: [eslint.config.js](eslint.config.js)
- TypeScript configuration: [tsconfig.json](tsconfig.json), [tsconfig.app.json](tsconfig.app.json), [tsconfig.node.json](tsconfig.node.json)
- Vite configuration: [vite.config.ts](vite.config.ts)