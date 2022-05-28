import React from 'react'
import "./Contact.css"
import { MailIcon } from "@material-ui/icons";

const Contact = () => {
  return (
      <main className="contact-page">
    <div className="contact-container" id='contact-id'>
        <h1>contact us</h1>
        <div className="phone">
            <i className="fas fa-phone-square fa-3x "></i>
            <p>0308-0129892,0334-1387202,0340-2628648</p>
        </div>
        <div className="email">
            <i className="fa fa-envelope fa-3x "></i>
            <p>estateZ@gmail.com</p>
        </div>
        <div className="map">
            <i className="fas fa-map-marker-alt fa-3x "></i>
            <p>Ned University Of Engineering And Technology,Karachi,Pakistan.</p>
        </div>
        <div className="social-links">
            <p>Follow Us on Social Media</p>
            {/* <a href=""><MailIcon/> </a> */}
            <a href=""><i class="fab fa-facebook-f fa-3x "></i></a>
            <a href=""><i class="fab fa-twitter fa-3x "></i></a>
            <a href=""><i class="fab fa-instagram fa-3x "></i></a>
            <a href=""><i class="fab fa-linkedin-in fa-3x "></i></a>
        </div>
    </div>
    </main>
  )
}

export default Contact











// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="contact1.css">
//     <link
//         href="https://fonts.googleapis.com/css2?family=Baloo+2&family=Comforter+Brush&family=Dancing+Script&family=M+PLUS+1+Code:wght@200&display=swap"
//         rel="stylesheet">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
// </head>

// <body>
//     <div class="container">
//         <h1>contact us</h1>
//         <div class="phone">
//             <i class="fas fa-phone-square fa-3x "></i>
//             <p>0308-0129892,0334-1387202,0340-2628648</p>
//         </div>
//         <div class="email">
//             <i class="fa fa-envelope fa-3x "></i>
//             <p>estateZ@gmail.com</p>
//         </div>
//         <div class="map">
//             <i class="fas fa-map-marker-alt fa-3x "></i>
//             <p>Ned University Of Engineering And Technology,Karachi,Pakistan.</p>
//         </div>
//         <div class="social-links">
//             <p>Follow Us on Social Media</p>
//             <a href=""><i class="fab fa-facebook-f fa-3x "></i></a>
//             <a href=""><i class="fab fa-twitter fa-3x "></i></a>
//             <a href=""><i class="fab fa-instagram fa-3x "></i></a>
//             <a href=""><i class="fab fa-linkedin-in fa-3x "></i></a>
//         </div>
//     </div>



// </body>

// </html>