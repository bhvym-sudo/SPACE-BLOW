from flask import render_template, Flask
from voyager import retrieve_sensor_data
from flask_restful import Api, Resource
app = Flask(__name__)
api = Api(app=app)

class HelloWorld(Resource):
    def get(self):
        return {"name": "bhavyam", "test": "testing"}


@app.route("/")
def index():
    data = retrieve_sensor_data()
    return render_template("index.html", instruments=data)

@app.route("/voyager1")
def data_():
    data = retrieve_sensor_data()
    return render_template('lol.html', instruments=data)

api.add_resource(HelloWorld,"/helloworld")

app.run(host="localhost", port=80, debug=True)
