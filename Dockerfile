FROM ubuntu:latest
RUN apt update
RUN apt install python3 python3-pip -y
WORKDIR /root/
COPY . .

# RUN pip install -r requirements.txt
# RUN pip install torch 
# RUN pip install Flask 
# RUN pip install Flask-cors 
# RUN pip install nltk
# RUN pip install numpy
EXPOSE 5000
# CMD ["python3", "app.py"] 