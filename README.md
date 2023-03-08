# BioBot Kit Search App
Biobot customers receive a kit with tubes inside of it, which the customer uses to collect
samples, and later sends the kit back to the Biobot lab. This app builds a search view
with an autocomplete functionality for our customers to use to track the shipping status of that
kit. Each kit has a label on it with a unique kit identifier and FedEx tracking number.

The autocomplete search is debounced, to alleviate stress on the API if there are many users querying for kits.

# Features
- Full Stack functionality using NextJS
- API that lists all kits and filters kits by search query
- Typing via Typescript
- Debouncing via Lodash
- Styling via Tailwind


## Running the application locally

To run the development server:


```bash
# install dependencies
npm install
# or
yarn install

# to run
npm run dev
# or
yarn dev
# or
pnpm dev
```

# Available scripts

```bash
npm run dev
# Run application development server

npm run build
# Build app for production

npm run start
# Run application in production mode

npm run lint
# Run linter for the application
```
