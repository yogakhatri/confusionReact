import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    render() {
        if (!this.props.dish) {
            return (
                <div></div>
            )
        }

        const comments = this.props.dish.comments.map((details) => {
            return (
                <div key={details.id} >
                    <p>{details.comment}<br />
                        --{details.author} , {details.date}</p>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <div>
                                <Card>
                                    <CardBody>
                                        <CardTitle><h5>{this.props.dish.name}</h5></CardTitle>
                                        <CardText>{this.props.dish.description}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {comments}
                    </div>
                </div>
            </div>
        )
    }
}

export default DishDetail
