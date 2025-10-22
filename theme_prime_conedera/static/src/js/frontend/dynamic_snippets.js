/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";
// import { utils as uiUtils } from "@web/core/ui/ui_service";
// import { groupBy } from "@web/core/utils/arrays";
// import { localization } from "@web/core/l10n/localization";

console.log("ENTRA EN PUBLIC WIDGET");

publicWidget.registry.s_d_image_products_block = publicWidget.registry.s_d_image_products_block.extend({
    selector: '.s_d_image_products_block_wrapper',
    bodyTemplate: 's_d_image_products_block_tmpl_inh',
    bodySelector: '.s_d_image_products_block',
});