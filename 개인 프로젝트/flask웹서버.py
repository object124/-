from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/user')
def user():
    return 'Hello, User!'

if __name__ == '__main__':
    app.run(host = '127.0.0.1:5000', port= 8080)



