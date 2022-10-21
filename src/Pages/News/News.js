import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const News = () => {
    const news = useLoaderData();
    const { title, author, details, image_url, rating, category_id} = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='text-center my-4'>{title}</Card.Title>
                    <div className='d-flex justify-content-around align-items-center'>
                        <p>
                            <span className='fw-semibold'>Author: </span>
                            {author.name}
                        </p>
                        <p>
                            <span className='fw-semibold'>Published Date: </span>
                            {author.published_date}
                        </p>
                        <p>
                            <FaStar className='me-2 text-warning'></FaStar>
                            {rating.number}
                        </p>
                    </div>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Button variant="primary"><Link to={`/category/${category_id}`} className='text-white text-decoration-none'>Back</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;