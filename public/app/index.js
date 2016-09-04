import 'babel-polyfill';

import VanillaModal from 'vanilla-modal'

window.VanillaModal = VanillaModal

// inject js
import "./app.js";
import "../shared/validate/validate.directive.js";
import "../shared/taglist/taglist.directive.js";
import "../shared/sortable/sortable.directive.js";
import "../shared/ng-enter/ng-enter.directive.js";
import "../shared/mongoose-error/mongoose-error.directive.js";
import "../shared/missing/missing.js";
import "../shared/missing/missing.controller.js";
import "../shared/mb-animate/mb-animate.directive.js";
import "../shared/image-selector/image-selector.directive.js";
import "../shared/htmlToPlainText/htmlToPlainText.filter.js";
import "../shared/helpers/helpers.service.js";
import "../shared/feathers/feathers.service.js";
import "../shared/fallback-src/fallback-src.directive.js";
import "../shared/endpoints/endpoints.service.js";
import "../shared/doubleClick/doubleClick.directive.js";
import "../shared/auth/auth.service.js";
import "../shared/api/api.service.js";
import "./components/meanbase-editable/meanbase-editable.directive.js";
import "./components/mb-src/mb-src.directive.js";
import "./components/mb-recaptcha/mb-recaptcha.directive.js";
import "./components/mb-list-selector/mb-list.modal.controller.js";
import "./components/mb-list-selector/mb-list-selector.directive.js";
import "./components/mb-list-remove/mb-list-remove.directive.js";
import "./components/mb-list-area/mb-list-area-directive.js";
import "./components/mb-link/mb-link.directive.js";
import "./components/mb-list-add/mb-list-add.directive.js";
import "./components/mb-init-list/init-list.directive.js";
import "./components/mb-icon/mb-icon.directive.js";
import "./components/mb-grid-item/mb-grid-item.directive.js";
import "./components/mb-find-images-modal/mb-find-images-modal.directive.js";
import "./components/mb-extension-edit/mb-extension-edit.directive.js";
import "./components/mb-edit-menu/mb-edit-menu.directive.js";
import "./components/mb-edit-link/mb-edit-link.directive.js";
import "./components/mb-edit/mb-edit.directive.js";
import "./components/mb-dynamic-html/mb-dynamic-html.directive.js";
import "./components/mb-choose-link/mb-choose-link.directive.js";
import "./components/mb-choose-image/mb-choose-image.directive.js";
import "./components/mb-choose-icon/mb-choose-icon.directive.js";
import "./components/mb-add-menu-item/mb-add-menu-item.directive.js";
import "./components/main/mb-add-menu-item.controller.js";
import "./components/main/main.js";
import "./components/main/main.controller.js";
import "./components/cms.headbar/cms.headbar.controller.js";
// end inject js

// inject jade
import "./components/cms.headbar/choose-link.modal.jade";
import "./components/cms.headbar/cms.headbar.jade";
import "./components/cms.headbar/editmodal.modal.jade";
import "./components/main/main.jade";
import "./components/main/mb-add-menu-item.modal.jade";
import "./components/main/mb-edit-icon.modal.jade";
import "./components/main/mb-edit-link.modal.jade";
import "./components/main/mb-edit-menu.modal.jade";
import "./components/main/mb-extension-edit.modal.jade";
import "./components/main/mb-find-image.modal.jade";
import "./components/mb-list-area/mb-list-area.jade";
import "./components/mb-list-selector/mb-list-selector.jade";
import "./components/mb-list-selector/mb-list.modal.jade";
import "../shared/image-selector/image-selector.jade";
import "../shared/missing/missing.jade";
import "../shared/sortable/sortable.jade";
import "../shared/taglist/taglist.jade";
import "../shared/validate/validate.jade";
// end inject jade

// inject stylus
import "./app.styl";
import "./components/cms.headbar/cms.headbar.styl";
import "./components/main/main.styl";
import "./components/mb-choose-icon/mb-choose-icon.styl";
import "./components/mb-choose-image/mb-choose-image.styl";
import "./components/mb-choose-link/mb-choose-link.styl";
import "./components/mb-edit/mb-edit.styl";
import "./components/mb-edit-link/mb-edit-link.styl";
import "./components/mb-edit-menu/mb-edit-menu.styl";
import "./components/mb-extension-edit/mb-extension-edit.styl";
import "./components/mb-grid-item/mb-grid-item.styl";
import "./components/mb-find-images-modal/mb-find-images-modal.styl";
import "./components/mb-link/mb-link.styl";
import "./components/mb-list-add/mb-list-add.styl";
import "./components/mb-list-area/mb-list-area.styl";
import "./components/mb-list-remove/mb-list-remove.styl";
import "./components/mb-list-selector/mb-list-selector.styl";
import "./components/meanbase-editable/meanbase-editable.directive.styl";
import "../shared/image-selector/image-selector.styl";
import "../shared/missing/missing.styl";
import "../shared/sortable/sortable.styl";
import "../shared/taglist/taglist.styl";
import "../shared/validate/validate.styl";
// end inject stylus
