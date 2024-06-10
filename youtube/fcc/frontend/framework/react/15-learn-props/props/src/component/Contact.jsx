import whikerson from "../images/mr-whikerson.png"
import Phone from "../images/Phone.jpg"
import mail from "../images/mail.jpg"

// export default function Contact(props) { // better to do this way
//     return (
//         <div className="contact-card">
//             <img src={props.img}/>
//             <h3>{props.name}</h3>
//             <div className="info-group">
//                 <img src={props.Phone}/>
//                 <p>{props.phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src={props.mail}/>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     )
// }

export default function Contact({img, name, phone, email}) {
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src={Phone}/>
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={mail}/>
                <p>{email}</p>
            </div>
        </div>
    )
}
