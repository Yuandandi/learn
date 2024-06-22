import React from "react" 


// CHECKBOX
export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true
        }
    )

    // console.log(formData) // show any input
    // console.log(formData.comments) // showw in the comment only

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <form> 
            <input
            type="text"
            placeholder="First Name"
            onChange={handleChange} 
            name="firstName"
            value={formData.firstName}
        />
                <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange} 
                name="lastName"
                value={formData.lastName}
            />
                    <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange} 
                    name="email"
                    value={formData.email}
                />

                    <textarea
                    value={formData.comments}
                    placeholder="Comments"
                    onChange={handleChange}
                    name="comments"
                />
                        <input
                        type="checkbox"
                        id="isFriendly"
                        checked={formData.isFriendly} 
                        name="isFriendly"
                        onChange={handleChange}
                    />
                            {/* "checked" jsx properties truthy falsy if "" uncheck*/}
                        <label htmlFor="isFriendly">Are you friendly?</label>

                    </form>
    )
}

// // FORM STATE OBJECT PRACTICE
// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {firstName: "", lastName: "", email: "", comments: ""}
//     )

//   console.log(formData) // show any input
//   // console.log(formData.comments) // showw in the comment only

//     function handleChange(event) {
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [event.target.name]: event.target.value
//             }
//         })
//     }

//     return (
//         <form> 
//             <input
//             type="text"
//             placeholder="First Name"
//             onChange={handleChange} 
//             name="firstName"
//             value={formData.firstName}
//         />
//                 <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange} 
//                 name="lastName"
//                 value={formData.lastName}
//             />
//                     <input
//                     type="email"
//                     placeholder="Email"
//                     onChange={handleChange} 
//                     name="email"
//                     value={formData.email}
//                 />

//                     <textarea
//                     value={formData.comments}
//                     placeholder="Comments"
//                     onChange={handleChange}
//                     name="comments"
//                   />

//                   </form>
//     )

// <textarea /> textarea in react is self closing

// value={formData.firstName} // adding this makes the input only maintain by thy react

// FORM STATE OBJECT;
// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {firstName: "", lastName: "", email: ""}
//     )


//     console.log(formData)

//     function handleChange(event) {
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [event.target.name]: event.target.value
//             }
//         })
//     }

//     return (
//         <form> 
//             <input
//             type="text"
//             placeholder="First Name"
//             onChange={handleChange} 
//             name="firstName"
//         />
//                 <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange} 
//                 name="lastName"
//             />
//                     <input
//                     type="email"
//                     placeholder="Email"
//                     onChange={handleChange} 
//                     name="email"
//                 />
//                     </form>
//     )
// }


// DRY CODE VERSION DON'T TRY;
// export default function Form() {
//     const [firstName, setFirstName] = React.useState("");
//     const [lastName, setLastName] = React.useState("");

//     console.log(firstName, lastName)

//     function handleFirstNameChange(event) {
//         setFirstName(event.target.value)
//     }

//     function handleLastNameChange(event) {
//         setLastName(event.target.value)
//     }

//     return (
//         <form> 
//             <input
//             type="text"
//             placeholder="First Name"
//             onChange={handleFirstNameChange} 
//         />
//                 <input
//                 type="text"
//                 placeholder="Last name"
//                 onChange={handleLastNameChange} 
//             />
//                 </form>
//     )
// }

// inputEvent ; you got the key user typed
// console.log(event) // SyntheticBaseEvent
// console.log(event.target)// HTML tag
// console.log(event.target.value) // get the current value of every keystroke
