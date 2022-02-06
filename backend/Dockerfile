FROM python:3

WORKDIR /backend

COPY . .

RUN apt-get update -y
RUN python -m pip install --upgrade pip
RUN pip3 install -r requirements.txt

EXPOSE 5000

ENTRYPOINT flask run