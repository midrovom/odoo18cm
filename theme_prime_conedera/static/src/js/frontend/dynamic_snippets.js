/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";
import { utils as uiUtils } from "@web/core/ui/ui_service";
import { groupBy } from "@web/core/utils/arrays";
import { localization } from "@web/core/l10n/localization";

publicWidget.registry.s_d_image_products_block = publicWidget.registry.s_d_image_products_block.extend({
    selector: '.s_d_image_products_block_wrapper',
    bodyTemplate: 'theme_prime_conedera.s_d_image_products_block_tmpl', // APUNTA A TU TEMPLATE
    
    _processData: function (data) {
        var products = this._getProducts(data);
        this._markUpValues(this.tpFieldsToMarkUp, products);
        var items = 8;
        if (uiUtils.isSmall()) {
            items = 4;
        }
        var group = groupBy(products, function (product) {
            let index = products.findIndex(x => x.id === product.id);
            return Math.floor(index / (items));
        });
        return Object.keys(group).map((key) => group[key]);
    },
    
    _modifyElementsAfterAppend: function () {
        this._super.apply(this, arguments);
        // USA TU CLASE PERSONALIZADA
        this.$('.droggol_product_slider').owlCarousel({
            dots: false, 
            margin: 10, 
            stagePadding: 5, 
            rewind: true, 
            nav: true, 
            rtl: localization.direction === 'rtl', 
            navText: ['<i class="dri h4 dri-chevron-left-l"></i>', '<i class="dri h4 dri-chevron-right-l"></i>'], 
            responsive: {
                0: {items: 1}, 
                576: {items: 1}, 
                768: {items: 1}, 
                992: {items: 1}, 
                1200: {items: 1}
            }
        });
    },
});