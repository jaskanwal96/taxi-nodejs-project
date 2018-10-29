const hapi = require('hapi');
const connection = require('./Connection');
const routes = require('./routes');
const inert = require("inert");
const vision = require("vision");
const hapi_swagger = require("hapi-swagger");

const init =async () =>{
    const server = new hapi.server(
        {
            port:8023,
            host:"localhost"
        }
    );
    const swaggerOption = {
        info: {
            title: "Test swagger api",
            //version: Pack.version
        }
    }

    await server.register([
        inert,
        vision,
        {
            plugin: hapi_swagger,
            options: swaggerOption
        }
    ])

    try {
        connection();
        routes(server);
        await server.start();
    }
    catch (err) {
        console.log(err),
            process.exit(1);
    }
    console.log(`server running at ${server.info.uri}`);
}
  
init();
