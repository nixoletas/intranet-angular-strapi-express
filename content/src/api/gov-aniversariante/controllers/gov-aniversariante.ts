/**
 * gov-aniversariante controller
 */
const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::gov-aniversariante.gov-aniversariante', ({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    async exampleAction(ctx) {
      try {
        ctx.body = 'ok';
      } catch (err) {
        ctx.body = err;
      }
    },
  }));