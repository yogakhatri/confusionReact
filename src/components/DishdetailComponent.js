import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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
    return (
        <div >
            <p>{comment.comment}<br />
                        --{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
        </div>
    )
}

const DishDetail = (props) => {

    if (!props.dish) {
        return (
            <div></div>
        )
    }
    const comments = props.dish.comments.map((comment) => {
        return (
            <RenderComments key={comment.id} comment={comment} />
        )
    })
    return (
        <div className="container">
            <div className="row">
                <RenderDish dish={props.dish} />
                <div className="col-12 col-md-5 m-1">
                    {comments}
                </div>
            </div>
        </div>
    )
}


export default DishDetail
