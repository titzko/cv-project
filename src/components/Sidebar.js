import { BiSave, BiPencil } from 'react-icons/bi';
import { useState } from 'react';

export default function Sidebar({}) {

    const [isEditMode, toggleEditMode] = useState(false);


    return (
        <div className="sidebar">
            {!isEditMode ? (
                <div>
                    <div className="title">Address</div>
                    <div className="details">123-Street</div>
                    <div className="details">City 123</div>
                    <div className="details">Germany</div>
                    <hr />
                    <div className="title">Phone</div>
                    <div className="details">555</div>
                    <hr />
                    <div className="title">Email</div>
                    <div className="details">Example-Mail@abc.de</div>
                    <hr />
                    <div className="title">Skills</div>
                    <div className="details">Skills 1</div>
                    <div className="details">Skills 2</div>
                    <div className="details">Skills 3</div>
                    <button className="btn btn-primary" onClick={()=>toggleEditMode(true)}>
                        <BiPencil className="icon" />
                    </button>
                </div>
            ) : (
                <div>
                    <button className="btn btn-success" onClick={()=>toggleEditMode(false)}>
                        <BiSave className="icon" />
                    </button>
                </div>
            )}
        </div>
      );
      
}