{
    'name': 'Field Wassenger',
    'version': '18.0.1.0.0',
    'description': '''
        Modulo desarrollado en Odoo 18
        - Campos personalizados para filtros en Wassenger
    ''',
    'summary': 'Wassenger Field Product',
    'author': 'Mauricio Idrovo',
    'website': 'https://callphoneecuador.com',
    'license': 'LGPL-3',
    'category': 'product',
    'depends': [
        'stock'
    ],
    'data': [
        'security/rules.xml',
        'security/ir.model.access.csv',
        'views/product_template_view.xml'
    ],
    'installable': True,
    'auto_install': False,
    'application': False,
}