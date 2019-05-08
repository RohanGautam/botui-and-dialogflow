# References/notes
1. BotUI starter from their [website](https://docs.botui.org/install.html).
2. `pip install dialogflow` and `pip install flask-restful` for python
3. `python backend.py` to obtain an api endpoint which frontend can hopefully query. **start the backend flask server with this command before loading `index.html`**
example api call `http://127.0.0.1:5000/request/camp deadline`





# Getting keys for dialogflow agent:
### 1. Setup an Agent in Dialogflow
![default_intent](https://github.com/jschnurr/botkit-middleware-dialogflow/blob/master/images/default_intent.png?raw=true)

Google describes `Agents` as *NLU (Natural Language Understanding) modules*. They transform natural user requests into structured, actionable data.

1. In the [Dialogflow Console](https://console.dialogflow.com/), create an [agent](https://dialogflow.com/docs/agents)
2. Choose or create a [Google Cloud Platform (GCP) Project](https://cloud.google.com/docs/overview/#projects).
3. Dialogflow will automatically setup a `Default Welcome Intent`, which you can try from the test console.

### 2. Create a service account and download the service key json file
<img src="images/save_json.png" />

In order for your Bot to access your Dialogflow Agent, you will need to create a `service account`. A [Service account](https://cloud.google.com/compute/docs/access/service-accounts) is an identity that allows your bot to access the Dialogflow services on your behalf. Once configured, you can download the private key for your service account as a JSON file.

1. Open the [GCP Cloud Console](https://console.cloud.google.com), and select the project which contains your agent.
2. From the `nav` menu, choose `IAM & admin`, `Service accounts`.
3. Select `Dialogflow Integrations` (created by default by Dialogflow), or create your own.
4. Under `actions`, select `create key`, select `JSON` and download the file.