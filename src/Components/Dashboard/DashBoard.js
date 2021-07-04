import React, { useState, useEffect } from 'react'
import '../../css/dashboard'
import { IconContext } from 'react-icons/lib';
import { 
    BsEyeSlash, 
    BsPencil,
    BsEnvelope
 } from 'react-icons/bs';

import {
    Table,
    Button,
    Dropdown
} from 'react-bootstrap';

function DashBoard({ savedJobsArray }) {
    const [status, setStatus] = useState('');
    const [contactInfo, setContactInfo] = useState([]);
    const [comment, setComment] = useState('');
    const [editJob, setEditJob] = useState({});
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactLinkedIn, setContactLinkedIn] = useState('');

    const statusChange = (e) => {
        setStatus(e.target.value)
    };

    const contactInfoChange = (e) => {
        setContactInfo(e.target.value);
        console.log(contactInfo)
    };

    const commentChange = (e) => {
        setComment(e.target.value);
    };

    const contactNameChange = (e) => {
        setContactName(e.target.value)
        console.log(contactName)
    };

    const contactEmailChange = (e) => {
        setContactEmail(e.target.value)
        console.log(contactEmail)
    }

    const contactLinkedInChange = (e) => {
        setContactLinkedIn(e.target.value)
        console.log(contactLinkedIn)
    }

    const editJobChange = (index) => {
        setEditJob(savedJobsArray[index])
        editJob.status = status;
        editJob.comment = comment;
        contactInfo.push(contactName, contactEmail, contactLinkedIn)
        console.log(contactInfo)
        editJob.contact_info = contactInfo;
        console.log(editJob)
    };

    let jobsRow = savedJobsArray.map((savedJob, index) => (
            <tr>
                <IconContext.Provider>
                <th>{savedJob.title}</th>
                <th>{savedJob.company_name}</th>
                <th>{savedJob.detected_extensions.posted_at}</th>
                <th>
                    <Dropdown>
                        <Dropdown.Toggle   className="dashboardButton">
                            <BsEnvelope size={20} />    
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <input 
                                name="name" 
                                placeholder={savedJob.contact_info ? savedJob.contact_info[0] : "Add Name"} 
                                onChange={contactNameChange}
                                type="text"
                            />
                            <input 
                                name="email" 
                                placeholder={savedJob.contact_info ? savedJob.contact_info[1]: "Add Email"} 
                                onChange={contactEmailChange}
                                type="email"
                            />
                            <input 
                                name="LinkedIn" 
                                placeholder={savedJob.contact_info? savedJob.contact_info[2] : "Add LinkedIn"} 
                                onChange={contactLinkedInChange}
                                type="text"
                            />
                        </Dropdown.Menu>
                    </Dropdown>
                </th>
                <th>
                    <select name="status" onChange={statusChange}> 
                        <option value="none" selected disabled hidden>{savedJob.status?savedJob.status:'Default'}</option>
                        <option value="done" >Done</option>
                        <option value="follow_up">Follow Up</option>
                        <option value="act_now">Act Now</option>
                    </select>
                </th>
                <th>
                    <input placeholder={savedJob.comment? savedJob.comment: 'No Comments Yet'} onChange={commentChange}>
                    
                    </input>
                </th>
                <th>
                    <Button className="dashboardButton" onClick={(e) => editJobChange(index)}>
                        <BsPencil size={20} />
                    </Button>
                </th>
                <th>
                    <Button className="dashboardButton">
                        <BsEyeSlash size={20} />
                    </Button>
                </th>
                </IconContext.Provider>
            </tr>
    ))
    return (
            <Table>
                <thead>
                    <tr>
                        <th>Jobs You Applied</th>
                        <th>Company</th>
                        <th>Date</th>
                        <th>Contact Info</th>
                        <th>Status</th>
                        <th>Comments</th>
                        <th>Edit</th>
                        <th>Hide</th>
                    </tr>
                </thead>
                <tbody>
                    {jobsRow}
                </tbody>
            </Table>
    )
}

export default DashBoard
