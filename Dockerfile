FROM python:3.11-slim

WORKDIR /app

COPY index.html .

EXPOSE $PORT

CMD python3 -m http.server $PORT
