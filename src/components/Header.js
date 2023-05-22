import { useState } from 'react';
import { BiSave, BiPencil } from 'react-icons/bi';

export default function Header() {

    const [isEditMode, toggleEditMode] = useState(false);
    const [headerInfo, setHeaderInfo] = useState({
        name: 'Your Name',
        title: 'Your Title',
        profile: 'Your Profile'
    });

    function updateHeaderInfos() {
        toggleEditMode(false);
        setHeaderInfo(headerInfo);
    }

    function handleChange(e) {
        const {name, value} = e.target;

        setHeaderInfo(current => ({
            ...current, [name]:value
        }))
    }

    return(
        <>

        {!isEditMode ? (
            <>
                <div className='d-flex justify-content-between flex-row-reverse'>
                    <button className="btn btn-primary btn-icon" onClick={()=>toggleEditMode(true)}>
                        <BiPencil className="icon" />
                    </button>
                    <h3>{headerInfo.name}</h3>
                </div>

                <h4 className='w-100'>{headerInfo.title}</h4>
                <p className='w-100'>{headerInfo.profile}</p>
            </>
        ) : 
        (    
            <form onSubmit={updateHeaderInfos}>
                <div className='d-flex justify-content-between flex-row-reverse'>
                    <button className="btn btn-icon btn-success" onClick={()=>toggleEditMode(false)}>
                        <BiSave className="icon" />
                    </button>

                    <div>
                        <label className='w-100'>Name:</label>
                        <input className='w-100' name="name" value={headerInfo.name} onChange={handleChange} />
                    </div>

                </div>

                <div>
                    <label className='w-100'>Title:</label>
                    <input className='w-100' name="title" value={headerInfo.title} onChange={handleChange} />
                </div>

                <div>
                    <label className='w-100'>Profile</label>
                    <textarea rows="5" className='w-100' name="profile" value={headerInfo.profile} onChange={handleChange} />
                </div>
            </form>
            )
        }
        </>
    )
}