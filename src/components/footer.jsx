import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faInstagram,faSquareFacebook } from "@fortawesome/free-brands-svg-icons";



export default function Footer() {
  return (
    <div className=" bg-black grid grid-cols-2 grid-rows-1 gap-2 h-48">
      <div className="text-white">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus
          ipsa ullam culpa, explicabo quos expedita, voluptates modi aliquid
          possimus nobis tenetur, eveniet nostrum totam rerum vitae molestias
          eos quam!
        </p>

        <h3>Payment Methods:</h3>
        <FontAwesomeIcon icon={faCcVisa} size="xl" />
        
      </div>
      <div className="grid grid-cols-5 grid-rows-5 gap-6 text-white">
       <div>
      <h3>Follow Us:</h3>
       <p>< FontAwesomeIcon icon={faXTwitter} size="lg"/> <span></span> Twitter</p>
       <p><FontAwesomeIcon icon={faInstagram} size="lg"/> <span></span>Instagram</p>
       <p><FontAwesomeIcon icon={faSquareFacebook} size="lg"/> <span></span>Facebook</p>
    </div>
      
      <div>
      <h3> Help</h3>
      <p>Shipping</p>
      <p>Returns</p>
      <p>FAQ</p>
      </div>

      <div>
      <h3>Information</h3>
      <p>Advanced Search</p>
      <p>Order and Return</p>
      <p>Store Location</p>
      </div>
      
      <div>
      <h3>Support</h3>
      <p>E-mail support</p>
      <p>Terms of Delivery</p>
      <p>Privacy Policy</p>
      <p>Return and Refund</p>
      </div>

      <div>
      <h3>Contact Us</h3>
      <address>
         <p>Address</p>
         <p>email</p>
         <p>Mobile Number</p>
         <p>MON-SAT</p>
         <p>9am to 5pm</p>
      </address>
      </div>
       
      </div>
<hr />
    </div>
  );
}
