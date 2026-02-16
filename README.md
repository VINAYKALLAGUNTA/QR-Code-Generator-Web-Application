# 🚀 QR Code Generator Service with Node.js and Express.js

A full-stack QR Code Generator web application built using **Node.js, Express.js, and JavaScript**.  
This project follows RESTful API design principles and uses a layered architecture (Routes → Controller → Service).

Users can enter a Product ID and Price to generate a QR code and print it separately.

---

## 📌 Features

- Generate QR Code dynamically
- RESTful API architecture
- Layered backend structure (Routes, Controller, Service)
- Error handling
- CORS enabled
- Print QR code option
- Clean and responsive UI

---

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- QRCode npm package
- body-parser
- cors

**Frontend:**
- HTML
- CSS
- JavaScript (Fetch API)

---

## 📂 Project Structure

```
qr-code-generator/
│
├── server/
│   ├── app.js
│   ├── routes.js
│   ├── controller.js
│   ├── service.js
│   └── package.json
│
└── client/
    ├── index.html
    ├── result.html
    ├── style.css
    └── script.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/qr-code-generator.git
cd qr-code-generator
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Install dependencies manually if needed:

```bash
npm install express qrcode body-parser cors
```

---

### 3️⃣ Start the Server

```bash
node app.js
```

Server will run on:

```
http://localhost:3000
```

---

### 4️⃣ Open Frontend

Go to the `client` folder and open:

```
index.html
```

in your browser.

---

## 📡 API Endpoint

### Generate QR Code

```
POST /generate-qr
```

### Request Body (JSON)

```json
{
  "data": {
    "id": "123",
    "price": "50"
  }
}
```

### Response

Returns QR code image (PNG format).

---

## 🧠 How QR Code Works

1. The input data is converted into binary format.
2. Error correction bits are added.
3. The QR code image is generated using the `qrcode` library.
4. The image is returned to the client as a PNG file.

---

## 🎯 Future Improvements

- Add QR color customization
- Add size selection
- Add logo inside QR
- Add download option
- Convert to full React frontend
- Deploy to cloud (Render / Vercel)

---

## 📷 Output Preview

- Enter Product ID and Price
- Generate QR
- View QR on next page
- Print only the QR image

---

## 📜 License

This project is open-source and free to use.

---

## 👨‍💻 Author

Vinay  
Full Stack Developer (Learning Phase 🚀)
