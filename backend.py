import uuid
# import dialogflow_v2 as dialogflow
from backend.connect_dialogflow import detect_intent_text
from flask import Flask
from flask_restful import Api, Resource, reqparse

app=Flask(__name__)
api=Api(app)

projectId='testaction-d6d53'

users = [
    {
        "request": "rohan gautam",
        "age": 42,
        "occupation":"memeLord"
    },
    {
        "request": "jSON",
        "age": 13,
        "occupation":"Jason's autistic sibling"
    },
    {
        "request": "Jass",
        "age": 48334,
        "occupation":"oldest person ever"
    }
]

class User(Resource):
    def get(self,request):
        '''get user'''
        print(f'GOT request= {request}, processing')
        return detect_intent_text(projectId, uuid.uuid4(),request,'en-US').query_result.fulfillment_text, 200
        # for user in users:
        #     if(request==user["request"]):
        #         return user,200 # this is a tuple
        # return "user not found", 404

api.add_resource(User, "/request/<string:request>")
app.run(debug=True)

# example call:
# http://127.0.0.1:5000/request/camp deadline