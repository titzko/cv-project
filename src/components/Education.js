import { useState } from 'react';
import { BiSave, BiPencil } from 'react-icons/bi';
import { FaPlus, FaTrash } from 'react-icons/fa';

export default function Education() {

    const [editEducation, setEditEducation] = useState([false,false])
    const [education, updateEducation] = useState([{
        dateFrom: '20.12.2018',
        dateTo: '22.12.2018',
        school: 'My School',
        degree: "Bachelor's",
        field: "Computer Science"
    },
    {
        dateFrom: '10.12.2018',
        dateTo: '12.12.2018',
        school: 'My University',
        degree: "Master's",
        field: "Computer Science"
    }],
    );

    function setEducation(e) {
        e.preventDefault();
    }


    function editEducationByIndex(i) {
        setEditEducation(old =>{
            return old.map((boolean,index) => {
                if(index == i) {
                    return !boolean
                } else {
                    return boolean;
                }
            })
        })
    }

    function addEducation() {
        let newEdu = {
            dateFrom: '',
            dateTo: '',
            school: '',
            degree: '',
            field: ''
        }

        updateEducation([...education, newEdu]);
        setEditEducation([...editEducation, true])
    }

    function handleChange(e) {
        const {name, value} = e.target;
        const indexToChange = e.target.dataset.index
        
        updateEducation((current) => {
            return current.map((edu, index) => {
                if(index == indexToChange) {
                    return {
                        ...edu, [name]:value
                    }
                } else {
                    return edu;
                }
            })
        })
    }

    function removeEducation(i) {
        updateEducation(education.filter((_,index)=> {
            return index != i;
        }))
        setEditEducation(editEducation.filter((_,index)=> {
            return index != i;
        }))
    }


    return(
        <>
            <h2>Education</h2>
            <>
                {education.map((edu, index) => {
                    return (
                        <div key={index}>
                        {!editEducation[index] ? (
                            <>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex title" style={{ gap: "10px" }}>
                                        <div>
                                            {edu.dateFrom} - {edu.dateTo}
                                        </div>
                                        <div>{edu.school}</div>
                                    </div>
                                    <div>
                                        <BiPencil className="icon" onClick={() => editEducationByIndex(index)} style={{"cursor" : "pointer"}}/>
                                        <FaTrash className="icon" onClick={() => removeEducation(index)} style={{"cursor" : "pointer"}}/>
                                    </div>
                                </div>
                                <p className="details">{edu.degree} in {edu.field}</p>
                            </>
                        ) : (
                            <>
                                <form className="d-flex justify-content-between py-5">
                                    <div>
                                        <label className='w-100'>From</label>
                                        <input className='w-100' value={education[index].dateFrom} onChange={handleChange} name="dateFrom" data-index={index} type="date"/>

                                        <label className='w-100'>To</label>
                                        <input  className='w-100'value={education[index].dateTo} onChange={handleChange} name="dateTo" data-index={index} type="date"/>

                                        <label className='w-100'>School</label>
                                        <input  className='w-100' value={education[index].school} onChange={handleChange} name="school" data-index={index}/>

                                        <label className='w-100'>Degree</label>
                                        <input  className='w-100' value={education[index].degree} onChange={handleChange} name="degree" data-index={index}/>

                                        <label className='w-100'>Field of Study</label>
                                        <input  className='w-100' value={education[index].field} onChange={handleChange} name="field" data-index={index}/>
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-success btn-icon" style={{"margin-top": "20px", "margin-left": "8px"}}
                                            onClick={() => editEducationByIndex(index)}
                                        >
                                            <BiSave className="icon" />
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                        </div>
                    );
                })}
                <div className='d-flex justify-content-end'>
                    <button className="btn btn-primary btn-icon" onClick={addEducation}>
                        <FaPlus  className="icon" />
                    </button>
                </div>
            </>
        </>
    )
}
