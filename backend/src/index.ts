import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

// Basic route
fastify.get('/', async (request, reply) => {
  return { 
    message: '🚀 Tattvadarsanam Backend API is running!',
    status: 'success',
    timestamp: new Date().toISOString()
  };
});

// Health check route
fastify.get('/health', async (request, reply) => {
  return { status: 'healthy' };
});

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: 3001, host: '0.0.0.0' });
    console.log('🎥 Tattvadarsanam Backend running on http://localhost:3001');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
