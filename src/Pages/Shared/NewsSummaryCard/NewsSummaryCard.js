import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";

const NewsSummaryCard = ({ news }) => {
    const { _id, title, total_view, author, details, image_url, rating} = news;
    return (
        <div className='mb-5'>
            <Card>
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex'>
                            <Image 
                                className='me-2' 
                                roundedCircle src={author?.img} 
                                style={{height: '60px'}}>
                            </Image>
                            <div>
                                <p className='mb-0 fw-semibold'>{author?.name}</p>
                                <p className='fw-semibold'>{author?.published_date}</p>
                            </div>
                        </div>
                        <div>
                            <BiBookmark className='me-2'></BiBookmark>
                            <FaShareAlt></FaShareAlt>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length > 250 ?
                           <>
                                {details.slice(0,250) + '...'} <Link to={`/news/${_id}`}>Read More</Link>
                            </>
                            :
                            <>
                                {details}
                            </>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='fw-semibold'>
                            <FaStar className='me-2 text-warning'></FaStar>
                            {rating.number}
                        </p>
                        <p className='fw-semibold'>
                            <FaEye className='me-2'></FaEye>
                            {total_view}
                        </p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;