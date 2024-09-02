from flask import Flask, request, jsonify

app = Flask(__name__)

# Define your function
def my_function(param1, param2):
    # Your function logic here
    result = f"Processed {param1} and {param2}"
    return result

# Define an API endpoint
@app.route('/run-function', methods=['POST'])
def run_function():
    # Get data from the request
    data = request.json
    param1 = data.get('param1')
    param2 = data.get('param2')

    # Run the function
    result = my_function(param1, param2)

    # Return the result as JSON
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
