/** @odoo-module **/

import "@website/js/content/menu";
import publicWidget from "@web/legacy/js/public/public_widget";
import ProductRootWidget from "@theme_prime/js/core/product_root_widget";
import RootWidget from "@theme_prime/js/core/snippet_root_widget";
import { rpc } from "@web/core/network/rpc";
import { SIZES, utils as uiUtils } from "@web/core/ui/ui_service";
import animations from "@website/js/content/snippets.animation";
import { OwlMixin, MarkupRecords, ProductsBlockMixins, CategoryPublicWidgetMixins, ProductCarouselMixins, CartManagerMixin, HotspotMixns, cartMixin, TabsMixin } from "@theme_prime/js/core/mixins";
import { pick } from "@web/core/utils/objects";
import { groupBy } from "@web/core/utils/arrays";
import { renderToElement } from "@web/core/utils/render";
import { localization } from "@web/core/l10n/localization";
import { _t } from "@web/core/l10n/translation";

publicWidget.registry.s_c_product_count_down = ProductRootWidget.extend(ProductsBlockMixins, {
    selector: '.s_c_product_count_down',

    bodyTemplate: 's_d_product_count_down_template',
    bodySelector: '.s_d_product_count_down_body',

    snippetNodeAttrs: (ProductRootWidget.prototype.snippetNodeAttrs || []).concat(['data-selection-info']),

    controllerRoute: '/theme_prime/get_products_data',

    fieldstoFetch: ['name', 'description_ecommerce', 'rating', 'public_categ_ids', 'offer_data'],

    extraLibs: (ProductRootWidget.prototype.extraLibs || []).concat(['/theme_prime/static/lib/OwlCarousel2-2.3.4/owl.carousel.js']),
    /**
     * @private
     */
    _getOptions: function () {
        var options = this._super.apply(this, arguments);
        if (this.selectionType) {
            options = options || {};
            options['shop_config_params'] = true;
        }
        return options;
    },
    /**
     * @private
     */
    _setDBData: function (data) {
        this.shopParams = data.shop_config_params;
        this._super.apply(this, arguments);
    },
    /**
     * initialize owlCarousel.
     * @private
     */
    _modifyElementsAfterAppend: function () {
        this._super.apply(this, arguments);
        this._reloadWidget({ selector: '.tp-countdown' });
        this.$('.droggol_product_slider_top').owlCarousel({
            dots: false,
            margin: 20,
            stagePadding: 5,
            rewind: true,
            rtl: localization.direction === 'rtl',
            nav: true,
            navText: ['<i class="dri h4 dri-chevron-left-l"></i>', '<i class="dri h4 dri-chevron-right-l"></i>'],
            responsive: {0: {items: 1}, 768: {items: 2}, 992: {items: 1}, 1200: {items: 1},
            },
        });
    },
});


publicWidget.registry.s_c_product_small_block = ProductRootWidget.extend(ProductsBlockMixins, {
    selector: '.s_c_product_small_block',

    bodyTemplate: 's_d_product_small_block_template',
    bodySelector: '.s_d_product_small_block_body',

    snippetNodeAttrs: (ProductRootWidget.prototype.snippetNodeAttrs || []).concat(['data-selection-info']),

    controllerRoute: '/theme_prime/get_products_data',

    fieldstoFetch: ['name', 'rating', 'public_categ_ids', 'dr_label_id'],

    extraLibs: (ProductRootWidget.prototype.extraLibs || []).concat(['/theme_prime/static/lib/OwlCarousel2-2.3.4/owl.carousel.js']),
    /**
     * initialize owlCarousel.
     * @private
     */
    _modifyElementsAfterAppend: function () {
        var self = this;
        this._super.apply(this, arguments);
        this.inConfirmDialog = this.$el.hasClass('in_confirm_dialog');
        if (this.inConfirmDialog) {
            this.$('.owl-carousel').removeClass('container');
        }
        this.$('.droggol_product_slider_top').owlCarousel({ dots: false, margin: 20, stagePadding: this.inConfirmDialog ? 0 : 5, rewind: true, nav: true, rtl: localization.direction === 'rtl', navText: ['<i class="dri h4 dri-chevron-left-l"></i>', '<i class="dri h4 dri-chevron-right-l"></i>'],
            onInitialized: function () {
                var $img = self.$('.d-product-img:first');
                if (self.$('.d-product-img:first').length) {
                    $img.one("load", function () {
                        setTimeout(function () {
                            if (!uiUtils.isSmall()) {
                                var height = self.$target.parents('.s_d_2_column_snippet').find('.s_c_product_count_down .owl-item.active .tp-side-card').height();
                                self.$('.owl-item').height(height+1);
                            }
                        }, 300);
                    });
                }
            },
            responsive: {0: {items: 2}, 576: {items: 2}, 768: {items: 2}, 992: {items: 2}, 1200: {items: 3}
            },
        });
    },
});