/** @odoo-module **/

import "@website/js/content/menu";
import publicWidget from "@web/legacy/js/public/public_widget";
import ProductRootWidget from "@theme_prime/js/core/product_root_widget";
import { utils as uiUtils } from "@web/core/ui/ui_service";
import { MarkupRecords, ProductsBlockMixins } from "@theme_prime/js/core/mixins";
import { groupBy } from "@web/core/utils/arrays";
import { localization } from "@web/core/l10n/localization";
import { _t } from "@web/core/l10n/translation";

publicWidget.registry.s_d_image_products_block_custom = ProductRootWidget.extend(ProductsBlockMixins, MarkupRecords, {
    selector: '.s_d_image_products_block_wrapper',
    bodyTemplate: 's_d_image_products_block_tmpl',
    snippetNodeAttrs: (ProductRootWidget.prototype.snippetNodeAttrs || []).concat(['data-selection-info']),
    bodySelector: '.s_d_image_products_block_custom',
    controllerRoute: '/theme_prime/get_products_data',
    fieldstoFetch: ['name', 'rating', 'public_categ_ids'],
    extraLibs: (ProductRootWidget.prototype.extraLibs || []).concat(['/theme_prime/static/lib/OwlCarousel2-2.3.4/owl.carousel.js']),
    _getOptions: function () {
        let opts = this._super.apply(this, arguments);
        return { ...opts, 'shop_config_params': true};
    },
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
        this.$('.droggol_product_slider_top').owlCarousel({ dots: false, margin: 10, stagePadding: 5, rewind: true, nav: true, rtl: localization.direction === 'rtl', navText: ['<i class="dri h4 dri-chevron-left-l"></i>', '<i class="dri h4 dri-chevron-right-l"></i>'], responsive: {0: {items: 1}, 576: {items: 1}, 768: {items: 1}, 992: {items: 1}, 1200: {items: 1}},
        });
    },
});