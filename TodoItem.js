{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf400
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 var azureMobileApps = require('azure-mobile-apps'),\
       promises = require('azure-mobile-apps/src/utilities/promises'),\
       logger = require('azure-mobile-apps/src/logger');\
       \
   var azure = require('azure-sb');  \
\
   var table = azureMobileApps.table();\
\
   // When adding record, send a push notification via APNS\
   table.insert(function (context) \{\
       \
       logger.info('Running TodoItem.insert');\
\
            \
       var notificationHubService = azure.createNotificationHubService('mynotificationhub', \
                        'Endpoint=sb://minotificationsnamespace.servicebus.windows.net/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=');\
      notificationHubService.apns.send(null,        \
        \{\
           aps: \{\
                alert: "Esto es una prueba push"\
            \}\
        \}\
        ,\
        function (error)\
        \{\
            if (!error) \{\
                console.warn("Notification successful");\
            \}\
        \});\
        \
       return context.execute();\
      \
   \});\
\
   module.exports = table;}