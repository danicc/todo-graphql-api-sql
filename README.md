# Learning Todo API

This is an api that handles Todo items. Is built on express using apollo server for graphql.

## Setup

In order to run this api you need to install docker-compose first.

Then you can start containers running `docker-compose up -d`

Run migrations doing the following two steps:
* Run `docker exec -it todographqlapisql_api_1 bash`
* And then inside of the container `npm run db:migrate`
* After migrations have finished run `exit` from the container.

Finally you could go to http://localhost:3000/graphiql

## Créditos

- Daniel Esquinazi

## Licensia

[MIT](https://opensource.org/licenses/MIT)