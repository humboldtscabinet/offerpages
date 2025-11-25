FROM python:3.11-slim

WORKDIR /app

COPY index.html .
COPY Offer\ Pages\ 1-3/ Offer\ Pages\ 1-3/

EXPOSE $PORT

CMD python3 -m http.server $PORT
