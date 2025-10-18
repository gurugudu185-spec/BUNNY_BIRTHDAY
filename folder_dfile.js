<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Bunny's Birthday Invitation</title>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Arial', sans-serif;
      background: linear-gradient(to right, #ffe0e9, #ffd3b6);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      text-align: center;
    }

    .card {
      background-color: white;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      max-width: 500px;
      width: 90%;
    }

    .photo {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 20px;
      border: 4px solid #ff69b4;
    }

    h1 {
      font-family: 'Pacifico', cursive;
      font-size: 2.5em;
      color: #ff69b4;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.1em;
      color: #555;
      margin: 8px 0;
    }

    .qr-code {
      margin-top: 30px;
    }

    footer {
      margin-top: 20px;
      font-size: 0.9em;
      color: #999;
    }
  </style>
</head>
<body>
  <div class="card">
    <!-- 🖼 Replace this with Bunny's real photo URL -->
    <img src="https://i.imgur.com/YOUR_PHOTO.jpg" alt="Bunny's Photo" class="photo" />

    <h1>Bunny's Birthday!</h1>
    <p>You're invited to a magical celebration!</p>
    <p><strong>Date:</strong> 25th October 2025</p>
    <p><strong>Time:</strong> 4:00 PM</p>
    <p><strong>Location:</strong> Bunny's Wonderland, 123 Joy Street</p>
    
    <div class="qr-code">
      <p>Scan this QR code to view the invitation online:</p>

      <!-- ✅ Replace with your real GitHub Pages URL -->
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://yourusername.github.io/bunnys-birthday/" alt="QR Code">
    </div>

    <footer>With love, Bunny 🐰</footer>
  </div>
</body>
</html>
