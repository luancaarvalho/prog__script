from flask import *

app = Flask('app')

@app.route('/init', methods=['POST', 'GET'])
def form():
    number=0
    if request.method == 'POST':
        number=request.form['number']
    return render_template('index.html', number=number, int=int, str=str)

app.run(host='0.0.0.0', port=8080)