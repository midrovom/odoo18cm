from odoo import _, api, fields, models

class ProductTemplate(models.Model):
    _inherit = 'product.template'

    product_pauta_ids = fields.One2many('product.pauta', 'product_tmpl_id', string='Pautas')


class ProductPauta(models.Model):
    _name = 'product.pauta'
    _description = 'Pauta del producto'

    product_tmpl_id = fields.Many2one('product.template', string='Producto')
    
    