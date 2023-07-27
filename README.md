# MOCK TEST FSW BINAR
## DEO WICAKSONO FSW 29

### 1. Apakah Kegunaan JSON pada REST API?

JSON adalah sebagai format Standard yang dapat dibaca oleh manusia untuk pertukaran data yang didalamnya berisi pasangan antara key dan value
source: https://en.wikipedia.org/wiki/JSON

jadi kegunaan JSON dalam REST API adalah sebagai format standard ketika terjadi pertukaran data antara database/server dan client. Setiap terjadi pertukaran data antara database dan client, data tersebut berbentuk format JSON karena JSON memiliki kelebihan yaitu format pertukarang data yang ringan, sintaks yang sederhana dan jelas, dan dapat digunakan oleh beragam bahasa pemprogramman
source: https://www.ayongoding.com/apa-itu-json/

### 2. Jelaskan bagaimana REST API bekerja

RESTful API bekerja dengan cara memanipulasi resource dan representasi. Representasi ini saling dipertukarkan di antara pengguna dan server melalui antarmuka terstandar dan protokol komunikasi tertentu, biasanya HTTP. 

Jadi, saat pengguna ingin menggunakan fungsi suatu aplikasi, perangkatnya akan mengirimkan permintaan melalui HTTP ke server. Server akan mencari resource dan mengomunikasikan representasi state sebagai respons kepada pengguna melalui protokol yang sama. Representasi ini bisa dibuat dalam berbagai format, seperti JSON atau XML.

Ini adalah langkah umum untuk semua panggilan API REST:

    1. Klien mengirimkan permintaan ke server. Klien mengikuti dokumentasi API untuk memformat permintaan dalam format yang dipahami oleh server.
    2. Server mengautentikasi klien dan mengonfirmasi bahwa klien memiliki hak untuk membuat permintaan.
    3. Server menerima permintaan dan memproses secara internal.
    4. Server mengembalikan respons kepada klien. Respons berisi informasi yang memberitahu klien jika permintaannya berhasil. Respons juga termasuk informasi apa saja yang diminta klien.

    source: https://aws.amazon.com/id/what-is/restful-api/

### fitur mock test aplikasi

1. Login Page
    - Redirect ke "/" kalau ada token
    - input data berupa Securitynumber
    - menampilkan alert bila SecurityNumber yang dimasukkan lebih atau kurang dari 4 (harus 4 digit)
    - bila securityNumber ada didatabase, maka akan mengeset token dan redirect ke "/"
2. Main Page
    - Redirect ke "/login" bila tidak ada token
    - Redirect ke "/login" dan revome token bila token tidak sesuai dengan yang ada di database (token invalid)
    - Set Reducer user yang sesuai dengan securityNumber token
    - Menampilkan to do list simple
    - tombol logout untuk mengset reducer jadi null dan remove token

### Link deploy
https://mock-test-eight.vercel.app/login