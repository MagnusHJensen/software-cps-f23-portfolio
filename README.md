# SpeedyCoins

## Softwaretechnology Portfolio

In this repository you will find the backend, frontend and database setup for our portfolio assignment.

How to start and run each application will be present in their respective readme's. LINK TO README\*S HERE!!

Diagrams can be found in the `diagrams` folder.

## Idea

For this portfolio I chose to go with currency conversions data. More specifically the data found at https://currencybeacon.com/

_This API has a rate limit of 5000 requests/month, so the historical data will not date all the way back to 1996, but only to 2013 and onwards._

_Since this limit is imposed on us, I will only be doing DKK against the USD currency as my data set.
Best option would be to allow for all 168 currencies to be indexed and allow the user to search for which one they want._

## My setup goes as follows:

- On initial load, checks if historical data is present. If not, fetch historical data from 2013-01-01 and onwards.
- Then fetch the latest conversion daily via. a request to update the persisted historical data.
- Expose an endpoint to the client, to allow for fetching the data regarding the requested currencies.
- Client requests this endpoint with the currencies they want (Currently only DKK vs USD supported)
- When asked it fetches the historical data, but also requests the LATEST currency from the api, by using the **Pull on load** strategy.
- Client visualizes the historical data in a graph, and adds a line through the graph of what the current currency conversion is. (This is to get a better overview of when the currency was under the current value and over the current value.)

## Integration strategies

This application makes use of a couple integration strategies:

- `Pull on load`: For when the currency is requested, we ask the [third party API](https://currencybeacon.com), for the latest currency conversion to get a better understanding of our data.
- `Polling`: The frontend application utilizes polling, to request the latest currency conversion to ensure the data you are viewing up to date.
- **However**: To not strain the API we utilize `Caching` to cache the latest currency conversion for up to **10 minutes**

## Architecture Choice.

My arhcitecture choice is the simple `Client/Server` which has a client application (in this case a simple frontend), that requests data from a server (in this case a nodejs server) that handles all the business logic and database connection.

The client is going to be a simple frontend, made with pure HTML, CSS, Typescript. (Compiled to Javascript)

The backend is going to be a NodeJS server with typescript, that runs express and connects to a MySQL database.

It will utilize [TypeORM](https://typeorm.io/) and using the `Active Mapper` pattern for interacting with the data models.

## Design Pattern

## Testing
