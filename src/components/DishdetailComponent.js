import React from 'react'
import {
    Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle><h5>{dish.name}</h5></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </Card>
        </div>
    )
}

function RenderComments({ comment }) {
    console.log(comment)
    return (
        <p key={comment.id}>{comment.comment}<br />
                        --{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
        </p>
    )
}

const DishDetail = (props) => {
    console.log(props)

    const comments = props.comments.map((comment) => {
        console.log(comment)
        return (

            <RenderComments comment={comment} />
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderDish dish={props.dish} />
                <div className="col-12 col-md-5 m-1" >
                    <h4>Comments</h4>
                    {comments}
                </div>
            </div>
        </div>
    );
}


export default DishDetail
