import fastify from "fastify";
import cors from '@fastify/cors'

const app = fastify();

app.register(cors, {
    origin: '*',
})


app.get('/vehicle', async (request, reply) => {
    const Vehicle = {
      brand: "Nissan",
      model: "350z",
      year: 2024
    };
      return reply.send(Vehicle);
  });

app.listen({port: 3333}, () => console.log("Server Running"));