import feathersErrors from 'feathers-errors'
import _ from 'lodash'

export default class ImageUploadService {

  setup(app) {
    this.app = app;
  }

  create(data, params) {
    return new Promise((resolve, reject) => {
      if(data && !_.isEmpty(data)) {
        this.app.service('themes').create(data).then(function(found) {
          return resolve(found);
        }).catch(function(err) {
          console.log("error uploading theme", err);
          return reject(err);
        });
      } else {
        return reject(new feathersErrors.Unprocessable('The theme did not have a valid theme content.'));
      }
    });
  }

}
