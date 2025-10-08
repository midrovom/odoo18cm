{
    'name': 'Theme Conedera',
    'version': '18.0.1.0.0',
    'description': '''
        Modulo personalizado para Odoo 18 CM
        Personalizacion de temas y snippets para la página de Conedera
    ''',
    'summary': 'Temas y snippets personalizados para Conedera',
    'author': 'Ing. Mauricio Idrovo',
    'website': 'https://callphoneecuador.com',
    'license': 'LGPL-3',
    'category': 'Theme/eCommerce', # Theme/eCommerce
    'images': [
        'static/description/conedera_screenshot.gif',
    ],
    'depends': [
        'website',
        'theme_prime',
    ],
    'data': [
        'views/headers.xml',
        'views/snippets.xml'
    ],
    'auto_install': False,
    'application': False,
    'installable': False,
    'assets': {
        
    },
}