#!/usr/bin/env Rscript
library(forecast)
library("csv")
library(Metrics)

dl <- read.csv("USD.csv")
dlcurs = dl[1:60,]
dlcurs$data = NULL
model <- auto.arima(dlcurs)
forecast = predict(model, n.ahead=1)
# write.csv(forecast, file="USDarima.csv", row.names=FALSE)

dollar <- ts(dl$curs[1:150], frequency=1)

model1 <- tbats(dollar)
# summary(model1) 
forecast1 = predict(model1, 1)
# write.csv(forecast1, file="USDtbats.csv", row.names=FALSE)

model2 <- nnetar(dollar,lambda=0)
forecast2 = predict(model2, 1)
# write.csv(forecast2, file="USDnnetar.csv", row.names=FALSE)

eur <- read.csv("EUR.csv")
eurcurs = dl[1:60,]
eurcurs$data = NULL
model4 <- auto.arima(eurcurs)
forecast4 = predict(model4, n.ahead=1)
# write.csv(forecast4, file="EURarima.csv", row.names=FALSE)

euro <- ts(eur$curs[1:150], frequency=1)

model5 <- tbats(euro)
forecast5 = predict(model5, 1)
# write.csv(forecast5, file="EURtbats.csv", row.names=FALSE)

model6 <- nnetar(euro,lambda=0)
# summary(model6) 
forecast6 = predict(model6, 1)
# write.csv(forecast6, file="EURnnetar.csv", row.names=FALSE)


gb <- read.csv("GBP.csv")
gbcurs = gb[1:60,]
gbcurs$data = NULL

model7 <- auto.arima(gbcurs)
forecast7 = predict(model7, n.ahead=1)
# write.csv(forecast7, file="GBParima.csv", row.names=FALSE)

gbp <- ts(gb$curs[1:150], frequency=1)

model8 <- tbats(gbp)
forecast8 = predict(model8, 1)
# write.csv(forecast8, file="GBPtbats.csv", row.names=FALSE)

model9 <- nnetar(gbp,lambda=0)
forecast9 = predict(model9, 1)
# write.csv(forecast9, file="GBPnnetar.csv", row.names=FALSE)


jp <- read.csv("JPY.csv")
jpcurs = jp[1:60,]
valid = dl[101:nrow(dl),]
jpcurs$data = NULL

model10 <- auto.arima(jpcurs)
summary(model10)
forecast10 = predict(model10, n.ahead=1)
# write.csv(forecast10, file="JPYarima.csv", row.names=FALSE)

jpy <- ts(jp$curs[1:150], frequency=1)
model11 <- tbats(jpy)
forecast11 = predict(model11, 1)
# write.csv(forecast11, file="JPYtbats.csv", row.names=FALSE)

model12 <- nnetar(jpy,lambda=0)
model12
forecast12 = predict(model12, 1)
# write.csv(forecast12, file="JPYnnetar.csv", row.names=FALSE)
