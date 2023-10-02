import numpy as np
import random
import json
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_url_path='', static_folder='client/build')
# CORS(app)
# CORS(app, origins=['http://localhost:3000'])

# import nltk
# nltk.download('punkt')
# from nltk.stem.porter import PorterStemmer
# import torch
# import torch.nn as nn
# from torch.utils.data import Dataset,DataLoader

# class NeuralNet(nn.Module):
#     def __init__(self,input_size,hidden_size,num_classes):
#         super(NeuralNet,self).__init__()
#         self.l1 = nn.Linear(input_size,hidden_size)
#         self.l2 = nn.Linear(hidden_size,hidden_size)
#         self.l3 = nn.Linear(hidden_size,num_classes)
#         self.relu = nn.ReLU()
    
#     def forward(self,x):
#         out = self.l1(x)
#         out = self.relu(out)
#         out = self.l2(out)
#         out = self.relu(out)
#         out = self.l3(out)
#         return out


# Stemmer = PorterStemmer()

# def tokenize(sentence):
#     return nltk.word_tokenize(sentence)

# def stem(word):
#     return Stemmer.stem(word.lower())

# def bag_of_words(tokenized_sentence,words):
#     sentence_word = [stem(word) for word in tokenized_sentence]
#     bag = np.zeros(len(words),dtype=np.float32)
    
#     for idx, w in enumerate(words):
#         if w in sentence_word:
#             bag[idx] = 1
#     return bag


# with open('Hindi101.json','r',encoding="utf8") as f:
#     intents = json.load(f)
    
# all_words = []
# tags = []
# xy = []

# for intent in intents['intents']:
#     tag = intent['tag']
#     tags.append(tag)
    
#     for pattern in intent['patterns']:
#         w = tokenize(pattern)
#         all_words.extend(w)
#         xy.append((w,tag))

# ignore_words = [',','?','/','!','.']
# all_words = [stem(w) for w in all_words if w not in ignore_words]
# all_words = sorted(set(all_words))
# tags = sorted(set(tags))

# x_train = []
# y_train = []

# for(pattern_sentence,tag) in xy:
#     bag = bag_of_words(pattern_sentence,all_words)
#     x_train.append(bag)
    
#     label = tags.index(tag)
#     y_train.append(label)
    
# x_train = np.array(x_train)
# y_train = np.array(y_train)

# num_epochs = 1000
# batch_size = 8
# learning_rate = 0.001
# input_size = len(x_train[0])
# hidden_size = 8
# output_size = len(tags)

# class ChatDataSet(Dataset):
    
#     def __init__(self):
#         self.n_samples = len(x_train)
#         self.x_data = x_train
#         self.y_data = y_train
    
#     def __getitem__(self,index):
#         return self.x_data[index],self.y_data[index]
    
#     def __len__(self):
#         return self.n_samples
    
# dataset=ChatDataSet()

# train_loader = DataLoader (
#                         dataset = dataset,
#                         batch_size = batch_size,
#                         shuffle = True,
#                         num_workers = 0 )
# device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
# model = NeuralNet(input_size,hidden_size,output_size).to(device=device)
# criterion = nn.CrossEntropyLoss()
# optimizer = torch.optim.Adam(model.parameters(),lr=learning_rate)

# for epoch in range(num_epochs):
#     for(words,labels) in train_loader:
#         words = words.to(device)
#         labels = labels.to(dtype=torch.long).to(device)
#         outputs = model(words)
#         loss = criterion(outputs,labels)
#         optimizer.zero_grad()
#         loss.backward()
#         optimizer.step()
        
#     if (epoch+1) % 100 == 0:
#         print(f"Epoch [{epoch+1}/{num_epochs}], Loss:{loss.item():.4f}")
        
# print(f"Final Loss: {loss.item():.4f}")
# data = {
#     "model_state":model.state_dict(),
#     "input_size":input_size,
#     "hidden_size":hidden_size,
#     "output_size":output_size,
#     "all_words":all_words,
#     "tags":tags
# }

# FILE = "TrainData.pth"
# torch.save(data,FILE)

# device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
# with open('Hindi101.json','r',encoding="utf8") as json_data:
#     intents = json.load(json_data)
    
# FILE = "TrainData.pth"
# data = torch.load(FILE)

# input_size = data['input_size']
# hidden_size = data['hidden_size']
# output_size = data['output_size']
# all_words = data['all_words']
# tags = data['tags']
# model_state = data['model_state']

# model = NeuralNet(input_size,hidden_size,output_size).to(device)
# model.load_state_dict(model_state)
# model.eval()


# def Main(sentence):
#     # sentence = Listen()
    
#     # if sentence == 'bye':
#     #     exit()
        
#     sentence = tokenize(sentence)
#     X = bag_of_words(sentence,all_words)
#     X = X.reshape(1,X.shape[0])
#     X = torch.from_numpy(X).to(device)
    
#     output = model(X)
    
#     _,predicted = torch.max(output,dim=1)
#     tag = tags[predicted.item()]
    
#     probs = torch.softmax(output,dim=1)
#     prob = probs[0][predicted.item()]
    
#     if prob.item()>0.75:
#         for intent in intents['intents']:
#             if tag == intent["tag"]:
#                 reply = random.choice(intent["responses"])
#                 # print(reply)
#                 return reply
#                 # Say(reply)
#                 break

@app.route('/chat',methods=["POST"])
def chat():
    data = request.json  # Assuming JSON input containing 'message'
    message = data['message']

    # response = Main(message)

    # return jsonify({"response": response})
    return jsonify({"response": "response"})


@app.route('/static/userprofile/<path:filename>')
def get_photo(filename):
    return send_from_directory('static/userprofile', filename)

@app.route('/',defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.errorhandler(404)
def page_not_found(e):
    return send_from_directory(app.static_folder,'index.html')

# Start the Flask app
if __name__ == '__main__':
    app.run()