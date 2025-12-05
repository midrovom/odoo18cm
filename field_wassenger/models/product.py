from odoo import _, api, fields, models

class ProductTemplate(models.Model):
    _inherit = 'product.template'

    product_pauta_ids = fields.Many2many('product.pauta', string='Pautas')


class ProductPauta(models.Model):
    _name = 'product.pauta'
    _description = 'Pauta del producto'

    name = fields.Char('Nombre')
    
    