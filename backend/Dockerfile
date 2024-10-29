FROM python

WORKDIR /app


COPY setup/requirements.txt ./

RUN pip install -r requirements.txt

COPY setup/ .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
