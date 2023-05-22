import { useState } from 'react';
import { BiSave, BiPencil } from 'react-icons/bi';
import { FaPlus, FaTrash } from 'react-icons/fa';


export default function Experience() {

    const [editExperiences, setEditExperiences] = useState([false,false])
    const [experience, updateExperience] = useState([{
        dateFrom: '20.12.2018',
        dateTo: '22.12.2018',
        role: 'Trainee',
        desc: "I was responsible for setting up an elastic cluster"
    },
    {
        dateFrom: '10.12.2018',
        dateTo: '12.12.2018',
        role: 'Senior',
        desc: "I was responsible for absolutely everything"
    }],
    );


    function setExperience(e) {
        e.preventDefault();
    }


    function editExperience(i) {
        setEditExperiences(old =>{
            return old.map((boolean,index) => {
                if(index == i) {
                    return !boolean
                } else {
                    return boolean;
                }
            })
        })
    }

    function addExperience() {
        let newXp = {
            dateFrom: '',
            dateTo: '',
            role: '',
            desc: ''
        }

        updateExperience([...experience, newXp]);
        setEditExperiences([...editExperiences, true])

    }

    function handleChange(e) {
        const {name, value} = e.target;
        const indexToChange = e.target.dataset.index
        
        updateExperience((current) => {
            return current.map((xp, index) => {
                if(index == indexToChange) {
                    return {
                        ...xp, [name]:value
                    }
                } else {
                    return xp;
                }
            })
        })
    }


    function removeExperience(i) {

        updateExperience(experience.filter((_,index)=> {
            return index != i;
        }))
        setEditExperiences(editExperiences.filter((_,index)=> {
            return index != i;
        }))
    }


    return(
        <>
  <h2>Experience</h2>
  <>
    {experience.map((xp, index) => {
      return (
        <div key={index}>
          {!editExperiences[index] ? (
            <>
              <div className="d-flex justify-content-between">
                <div className="d-flex title" style={{ gap: "10px" }}>
                  <div>
                    {xp.dateFrom} - {xp.dateTo}
                  </div>
                  <div>{xp.role}</div>
                </div>
                <div>
                    <BiPencil className="icon" onClick={() => editExperience(index)} style={{"cursor" : "pointer"}}/>
                    <FaTrash className="icon" onClick={() => removeExperience(index)} style={{"cursor" : "pointer"}}/>
                </div>
              </div>
              <p className="details">{xp.desc}</p>
            </>
          ) : (
            <>
              <form className="d-flex justify-content-between py-5">
                  <div>
                    <label className='w-100'>From</label>
                    <input className='w-100' value={experience[index].dateFrom} onChange={handleChange} name="dateFrom" data-index={index} type="date"/>

                    <label className='w-100'>To</label>
                    <input  className='w-100'value={experience[index].dateTo} onChange={handleChange} name="dateTo" data-index={index} type="date"/>

                    <label className='w-100'>Role</label>
                    <input  className='w-100' value={experience[index].role} onChange={handleChange} name="role" data-index={index}/>

                    <label className='w-100'>Description</label>
                    <input  className='w-100' value={experience[index].desc} onChange={handleChange} name="desc" data-index={index}/>
                </div>
                <div>
                  <button
                    className="btn btn-success btn-icon" style={{"margin-top": "20px", "margin-left": "8px"}}
                    onClick={() => editExperience(index)}
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
    <button className="btn btn-primary btn-icon" onClick={addExperience}>
        <FaPlus  className="icon" />
        </button>
    </div>
  </>
</>
)
}