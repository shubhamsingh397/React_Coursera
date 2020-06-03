import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


    class DishDetail extends Component {


        renderDish(dish)
        {
            if (this.props.dish != null)
            // const dish = this.props.dish;
             return(
               
                     <div  className="col-12 col-md-5 m-1">
                 <Card>
                     <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                     <CardBody>
                     <CardTitle>{this.props.dish.name}</CardTitle>
                     <CardText>{this.props.dish.description}</CardText>
                     </CardBody>
                 </Card>
                 </div>
                
             );
        else
             return(
                 <div> </div>
             );
        }

        renderComments(comments)
        {
            if (comments == null) {
                return (<div></div>)
            }
                const showComments = comments.map(comment=> {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                            </p>
                        </li>
                    )
                })

                return (
                    <div className='col-12 col-md-5 m-1'>
                        <h4> Comments </h4>
                        <ul className='list-unstyled'>
                            {showComments}
                        </ul>
                    </div>
                )
                
               
            
        }
        render() {
            const dish = this.props.dish
            if (dish == null) {
                return (<div></div>)
            }
            const dishItem = this.renderDish(dish)
            const comment = this.renderComments(dish.comments)
            return (
                <div className='row'>
                    {dishItem}
                    {comment}
                    </div>
            )
        }

    
    }
export default DishDetail;