FROM ubuntu:latest

RUN echo "Updating APT repositories..."
RUN apt update

RUN echo "Installing Python 3 and pip..."
RUN apt install python3 python3-pip -y

WORKDIR /root/
COPY . .
# RUN pip install -r requirements.txt

RUN echo "Installing torch..."
RUN pip install torch

RUN echo "Installing Flask..."
RUN pip install Flask

RUN echo "Installing Flask-cors..."
RUN pip install Flask-cors

RUN echo "Installing nltk..."
RUN pip install nltk

RUN echo "Installing numpy..."
RUN pip install numpy

EXPOSE 5000

CMD ["python3", "app.py"]