{
    'name': 'Theme Conedera',
    'version': '18.0.1.0.0',
    'description': '''
        Modulo personalizado para Odoo 17 CM
        Personalizacion de temas y snippets para la página de Conedera
    ''',
    'summary': 'Temas y snippets personalizados para Conedera',
    'author': 'Ing. Mauricio Idrovo',
    'website': 'https://callphoneecuador.com',
    'license': 'LGPL-3',
    'category': 'Theme/eCommerce',
    'images': [
        'static/description/conedera_screenshot.gif',
    ],
    'depends': [
        'theme_prime',
        'website',
        'web_editor',
    ],
    'data': [
        'views/headers_custom.xml',
        'views/snippets_custom.xml',
    ],
    'auto_install': False,
    'application': False,
    'installable': True,
    'assets': {
        
    },
}