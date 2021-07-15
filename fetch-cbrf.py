#! /usr/bin/env python3
import datetime
from datetime import timedelta, date
import pandas as pd
import urllib
import csv
import requests
import codecs
import xmltodict, json
import os

#Собираем URL со свежими датами

to_date = datetime.date.today()
from_date = to_date - timedelta(days=300)

new_from_date = from_date.strftime("%d.%m.%Y")
new_to_date = to_date.strftime("%d.%m.%Y")

new_from_date2 = from_date.strftime("%m/%d/%Y")
new_to_date2 = to_date.strftime("%m/%d/%Y")

dt = [('FromDate', new_from_date2), ('ToDate', new_to_date2)]
ert = urllib.parse.urlencode(dt)
USD_url = ('https://www.cbr.ru/Queries/UniDbQuery/DownloadExcel/98956?Posted=True&mode=1&VAL_NM_RQ=R01235&From=' + new_from_date + '&To=' + new_to_date + '&' + ert)

EUR_url = ('https://www.cbr.ru/Queries/UniDbQuery/DownloadExcel/98956?Posted=True&mode=1&VAL_NM_RQ=R01239&From=' + new_from_date + '&To=' + new_to_date + '&' + ert)

GBP_url = ('https://www.cbr.ru/Queries/UniDbQuery/DownloadExcel/98956?Posted=True&mode=1&VAL_NM_RQ=R01035&From=' + new_from_date + '&To=' + new_to_date + '&' + ert)

JPY_url = ('https://www.cbr.ru/Queries/UniDbQuery/DownloadExcel/98956?Posted=True&mode=1&VAL_NM_RQ=R01820&From=' + new_from_date + '&To=' + new_to_date + '&' + ert)
#Отправляем запрос, вытаскиваем  динамику курса

urllib.request.urlretrieve(USD_url, 'USDrate.xlsx')
ufr = requests.get(USD_url)

urllib.request.urlretrieve(EUR_url, 'EURate.xlsx')
ufr = requests.get(EUR_url)

urllib.request.urlretrieve(GBP_url, 'GBPrate.xlsx')
ufr = requests.get(GBP_url)

urllib.request.urlretrieve(JPY_url, 'JPYate.xlsx')
ufr = requests.get(JPY_url)

# Преобразуем в формат csv

data = pd.ExcelFile('USDrate.xlsx') 
read_file = pd.read_excel(data)
del read_file['cdx']
del read_file['nominal']
#path = '/home/anastasia/my-app/src/data'
read_file.to_csv ('USD.csv', encoding="utf-8", index = None) 

data = pd.ExcelFile('EURate.xlsx') 
read_file = pd.read_excel(data)
del read_file['cdx']
del read_file['nominal']
#path = '/home/anastasia/my-app/src/data'
read_file.to_csv ('EUR.csv', encoding="utf-8", index = None) 

data = pd.ExcelFile('GBPrate.xlsx') 
read_file = pd.read_excel(data)
del read_file['cdx']
del read_file['nominal']
#path = '/home/anastasia/my-app/src/data'
read_file.to_csv ('GBP.csv', encoding="utf-8", index = None)

data = pd.ExcelFile('JPYate.xlsx') 
read_file = pd.read_excel(data)
del read_file['cdx']
del read_file['nominal']
#path = '/home/anastasia/my-app/src/data'
read_file.to_csv ('JPY.csv', encoding="utf-8", index = None)

#Печаталка csv
#with open('dollar_rate.csv') as f:
    #reader = csv.reader(f)
    #for row in reader:
        #print(row)
        
# Выгружаем ежедневные курсы валют ЦБ РФ
url = "http://www.cbr.ru/scripts/XML_daily.asp"
urllib.request.urlretrieve(url, 'All_rate.xml')   
ufrz = requests.get(url)

#Mеняем кодировку на utf-8, перезаписываем файл
f = codecs.open('All_rate.xml', 'r', encoding='windows-1251')
u = f.read() 

out = codecs.open('All_rate.xml', 'w', encoding="utf-8")
out.write(u)  

#Преобразуем в json
with open('All_rate.xml') as fd:
    doc = xmltodict.parse(fd.read())
tojson = json.dumps(doc, ensure_ascii=False, sort_keys = True, indent = 4) 
#print(tojson)

# Записываем json в файл
filepath = os.path.join('/home/anastasia/my-app/src/data', 'All_rate.json')
out = codecs.open(filepath, 'w', encoding="utf-8")
out.write(tojson[111:8424])

