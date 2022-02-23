import Fastify from "fastify";

function sleep(timeMs){
  return new Promise((resolve) => setTimeout(resolve, timeMs));
}

(async () => {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(async function plugin0() {
    console.log("plugin0 register start");
    console.log("plugin0 register finish");
  });

  await fastify.register(async function plugin1() {
    console.log("plugin1 register start");

    await sleep(500);

    console.log("plugin1 register finish");
  });

  await sleep(1);

  await fastify.register(async function plugin2() {
    console.log("plugin2 register start");

    await sleep(500);

    console.log("plugin2 register finish");
  });

  console.log("starting server");

  await fastify.listen(3000);
})();
