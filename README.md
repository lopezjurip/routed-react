# Using `create-react-app` with React Router + Express.js

**:warning: This is outdated, please refer to the official and new [react-router docs](https://reacttraining.com/react-router/)**

See : https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d

## Development

Clone this repository:

```sh
git clone https://github.com/mrpatiwi/routed-react.git
cd routed-react
```

Install dependencies:

```sh
npm install
```

Start the project at [`http://localhost:3000`](http://localhost:3000).

```sh
npm start
```

## Running with Docker

Be sure to install Docker and start a Docker-machine if necessary.

Let's create an image named `routed-react`:

```sh
docker build -t routed-react .
```

Finally, start a container named `routed-react-instance` at port `80`.

```sh
docker run -p 80:9000 --name routed-react-instance routed-react
```

## Testing

```sh
npm test
```
