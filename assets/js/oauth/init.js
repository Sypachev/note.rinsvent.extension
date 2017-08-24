var oauth = ChromeExOAuth.initBackgroundPage({
    'request_url': 'https://note.rinsvent.ru/oauth/get-request-token',
    'authorize_url': 'https://note.rinsvent.ru/oauth/get-authorize-token',
    'access_url': 'https://note.rinsvent.ru/oauth/get-access-token',
    'consumer_key': 'anonymous',
    'consumer_secret': 'anonymous',
    'scope': 'https://note.rinsvent.ru',
    'app_name': 'Client for https://note.rinsvent.ru'
});
