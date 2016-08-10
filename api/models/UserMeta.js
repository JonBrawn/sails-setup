/**
 * UserMeta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      metaKey: {
          type: "string",
          required: true
      },

      metaValue: {
          type: 'text',
          required: true
      },

      owner: {
          model: "users"
      }
      
  }
};
