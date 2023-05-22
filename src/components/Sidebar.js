import { BiSave, BiPencil } from 'react-icons/bi';
import { FaTrash, FaCheck } from 'react-icons/fa';

import { useState } from 'react';

export default function Sidebar({}) {

    const [isEditMode, toggleEditMode] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        street: "",
        houseNo: "",
        zipCode: "",
        city: "",
        country: "",
        phone: "",
        skills: ["Skiing", "Hiking", "Soccer"],
        email: "",
    });
    const [newSkill, setNewSkill] = useState(""); // For the value of the new skill input


    // Handle the click of the add skill button
    function handleAddSkill() {
        if (newSkill) {
            setContactInfo(oldInfo => ({
                ...oldInfo,
                skills: [...oldInfo.skills, newSkill]
            }));

            setNewSkill(""); // Reset the new skill input
        }
    }

    function updateContactInformation(e) {
        e.preventDefault();
        toggleEditMode(false);
    }


    function removeSkill(indexToDelete) {
        let i = indexToDelete;
        setContactInfo(current => ({
            ...current,
            skills: current.skills.filter((_,index) => index != i)
        }))
    }


    function checkForEnterKey(e) {
        if(e.charCode == 13) {
            e.preventDefault();
            handleAddSkill();
        }
    }

    function handleChange(e) {
        const {name, value} = e.target;

        /*
        setContactInfo((oldInfo) => {
            return { ...oldInfo, [name]: value };
        });

        */

        // See the commented code above for the version that explicitly returns an object.
        // In JavaScript, arrow functions can implicitly return a value if the function body is enclosed in parentheses.
        // Without the parentheses here, JS would interpret the curly braces as starting a function body.
        // By using parentheses, we're telling JS that we want to implicitly return an object literal.
        setContactInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


    let skills = contactInfo.skills.map((skill, index) => {
        return <div key={index} className='details'>{skill}</div>
    })

    return (
        <div className="sidebar">
            {!isEditMode ? (
                <div>
                    <div className='d-flex justify-content-between align-items-end'>
                        <div className="title">Address</div>
                        <button className="btn btn-primary btn-icon" onClick={()=>toggleEditMode(true)}>
                            <BiPencil className="icon" />
                        </button>
                    </div>
                    <div className="details">{contactInfo.street} {contactInfo.houseNo}</div>
                    <div className="details">{contactInfo.zipCode} {contactInfo.city}</div>
                    <div className="details">{contactInfo.country}</div>
                    <hr />
                    <div className="title">Phone</div>
                    <div className="details">{contactInfo.phone}</div>
                    <hr />
                    <div className="title">Email</div>
                    <div className="details">{contactInfo.email}</div>
                    <hr />
                    <div className="title">Skills</div>
                    {skills}
                </div>
            ) : (
                <div>
                    <form onSubmit={updateContactInformation}>
                        <div className='d-flex justify-content-between flex-row-reverse'>

                            <button className="btn btn-icon btn-success" onClick={()=>toggleEditMode(false)}>
                                <BiSave className="icon" />
                            </button>

                            <div>
                                <label>Street:</label>
                                <input name="street" value={contactInfo.street} onChange={handleChange} />
                            </div>
                        </div>

                        <div>
                            <label className='w-100'>HouseNo:</label>
                            <input name="houseNo" value={contactInfo.houseNo} onChange={handleChange} />
                        </div>

                        <div>
                            <label className='w-100'>zipCode:</label>
                            <input name="zipCode" value={contactInfo.zipCode} onChange={handleChange} />
                        </div>

                        <div>
                            <label className='w-100'>city:</label>
                            <input name="city" value={contactInfo.city} onChange={handleChange} />
                        </div>

                        <div>
                            <label className='w-100'>country:</label>
                            <input name="country" value={contactInfo.country} onChange={handleChange} />
                        </div>
                        
                        <div>
                            <label className='w-100'>phone:</label>
                            <input name="phone" value={contactInfo.phone} onChange={handleChange} />
                        </div>

                        <div>
                            <label className='w-100'>email:</label>
                            <input name="email" value={contactInfo.email} onChange={handleChange} />
                        </div>


                        <div className='mt-5'>
                            <label className='w-100 title'>Current Skills:</label>
                            {contactInfo.skills.map((skill, index) => {
                                return (
                                    <>
                                        <div key={index} className='d-flex justify-content-between w-100 my-2'>
                                            <div>{skill}</div>
                                            <div>
                                                <FaTrash className="icon" onClick={() => removeSkill(index)} color={"grey"} style={{"cursor": "pointer"}}/>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                )
                            })}
                        </div>

                        <div>
                            <label className='w-100'>Skill:</label>
                            <div className='d-flex' style={{"gap": "10px"}}>
                                <input name="newSkill" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} onKeyPress={checkForEnterKey}  />
                                    <BiSave className="icon" onClick={handleAddSkill} color={"grey"} style={{"cursor": "pointer"}}/>
                            </div>

                        </div>

                    </form>
                </div>
            )}
        </div>
      );
}