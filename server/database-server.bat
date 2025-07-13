@echo off
set PORT=4000
set DBPATH=../files/database

if not exist %DBPATH% (
  mkdir %DBPATH%
)

mongod --port %PORT% --dbpath %DBPATH%
pause 