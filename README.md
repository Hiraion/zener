# Tablas (Sin terminar)
**users**
~~~
🔑id
♦ name
♦ password
♦ created
♦ updated
~~~
**profiles**
~~~
📎user_id
♦ status
♦ level
♦ created
♦ updated
~~~
**customers**
~~~
🔑id
♦ name
♦ dni
♦ phone
♦ address
♦ created
♦ updated
~~~
**works**
~~~
🔑id
♦ device
♦ issue
📎customer_id
📎status_id
📎detail_id
♦ created
♦ updated
~~~
**details**
~~~
🔑 id
♦ other
♦ created
♦ updated
~~~
**products**
~~~
🔑id
♦ name
♦ barcode
♦ price
♦ cost
♦ stock
♦ min
♦ max
♦ created
♦ updated
~~~
**sales**
~~~
🔑 id
📎 product_id
📎 user_id
♦ created
~~~
**status**
~~~
🔑 id
♦ cost
♦ price
♦ paid
♦ retired
♦ solved
♦ created
♦ updated
~~~

# 📓 Notas

>**Para consultar tablas existentes:**\
SELECT * FROM sqlite_master WHERE type = "table";

>🔑 Llave Primaria\
📎 Llave Foranea
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
👻 Boo!