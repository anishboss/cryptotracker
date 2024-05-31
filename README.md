# cryptotracker

A notification system for cryptocurrency. The system will monitor price change and alert users according to their watchlist

# Install, Configure & Run

Below mentioned are the steps to install, configure & run in your platform/distributions.

```bash
# Clone the repo.
git clone https://github.com/anishboss/cryptotracker.git;

# Goto the cloned project folder.
cd cryptotracker;
```

```bash
# Note: It is assumed here that you have MongoDB running in the background and that you have created the database.

# Install NPM dependencies.
# Note: You can review the list of dependencies from the below link.
npm install;

#Create .env file in root folder as .env.sample

# Run the app without compiling ts files
npm run dev;
# Run the bulid
npm run build
# Run the app
npm run start
```

# List of Routes

```sh

# API Routes:

+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  GET   | /api/coins
  GET   | /api/watchlists
  POST  | /api/watchlists
+--------+-------------------------+
```
