import { v4 as uuidv4 } from "uuid";

import phone from "../../assets/image/homePage/phone.svg";
import email from "../../assets/image/homePage/mail.svg";
import website from "../../assets/image/homePage/Union.svg";

export const contactsFooter = [
  {
    id: uuidv4(),
    imgUrl: phone,
    text: "+0123 456 987, +0123 456 987",
    alt: "Contact_phone",
  },
  {
    id: uuidv4(),
    imgUrl: email,
    text: "yourmailaddress@gmail.com",
    alt: "Contact_email",
  },
  {
    id: uuidv4(),
    imgUrl: website,
    text: "www.yourwebsitename.com",
    alt: "Contact_site",
  },
];
