'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const verifyHooks = require('feathers-service-verify-reset').hooks

console.log("require('feathers-service-verify-reset')", require('feathers-service-verify-reset'));

const permissionName = 'manageUsers';

function emailVerification(hook, next) {
  // ...
  next(null, hook);
}

exports.before = {
  all: [],
  find: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.attachPermissions(),
    globalHooks.isEnabled(),
    // globalHooks.hasPermission(permissionName),
  ],
  get: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.attachPermissions(),
    globalHooks.isEnabled()
    // auth.restrictToOwner({ ownerField: '_id' }),
  ],
  create: [
    auth.hashPassword(),
    verifyHooks.addVerification()
  ],
  update: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.attachPermissions(),
    globalHooks.isEnabled(),
    globalHooks.hasPermissionOrRestrictChanges(permissionName, {restrictOn: ['role', 'enabled'] }),
    globalHooks.permitChangePassword(),
    globalHooks.ifPasswordThenHash()
  ],
  patch: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.attachPermissions(),
    globalHooks.isEnabled(),
    globalHooks.hasPermissionOrRestrictChanges(permissionName, {restrictOn: ['role', 'enabled'] }),
    globalHooks.permitChangePassword(),
    globalHooks.ifPasswordThenHash()
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.attachPermissions(),
    globalHooks.isEnabled(),
    globalHooks.hasPermission(permissionName)
  ]
};

exports.after = {
  all: [
    hooks.remove('password')
  ],
  find: [
    verifyHooks.removeVerification(true)
  ],
  get: [
    globalHooks.attachPermissions(),
    verifyHooks.removeVerification(true)
  ],
  create: [
    emailVerification,
    verifyHooks.removeVerification(),
    globalHooks.attachPermissions(),
    verifyHooks.removeVerification(true)
  ],
  update: [],
  patch: [
    verifyHooks.removeVerification(),
  ],
  remove: [
    verifyHooks.removeVerification(),
  ]
};
