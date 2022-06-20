import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserComment.css';

const UserComment = ({ usercomment }) => {
    const { id, name, picture, comment, rating } = usercomment;
    const navigate = useNavigate();


    return (
        <div className='UserComment '>
            <div className="testimonial-col">
                            <div className="user">
                                <img className='userPic w-25 rounded-circle' src={picture} alt="" />
                                <div className="user-info">
                                    <h4>{name}</h4>
                                    <p>{comment}</p>
                                    <small>Rating: {rating}</small>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default UserComment;