const errors = require('feathers-errors');
const utils = require('feathers-hooks-utils');

module.exports = (restriction = {}, options = {}) => (hook) => {
  utils.checkContext(hook, 'before')

  if (!hook.params.user || !hook.params.user.isVerified) {
    let query = Object.assign({}, hook.params.query, restriction);

    if(hook.id !== null && hook.id !== undefined) {
      const id = {};
      id[options.idField] = hook.id;
      query = Object.assign(query, id);
    }

    // Set provider as undefined so we avoid an infinite loop if this hook is
    // set on the resource we are requesting.
    const params = Object.assign({}, {query}, hook.params, { provider: undefined }, {forceCall: true});

    hook.params.provider = undefined;
    return this.find(params).then(results => {
      if(hook.method === 'get' && Array.isArray(results) && results.length === 1) {
        hook.result = results[0];
        return hook;
      } else {
        hook.result = results;
        return hook;
      }
    }).catch(() => {
      throw new errors.NotFound(`No record found`);
    });
  }
}
