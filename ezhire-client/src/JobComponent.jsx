import Links from "./api/links.js";
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Job extends Component{

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            modalID: -1
        }
        this.toggleModal = this.toggleModal.bind(this);

    }

    toggleModal({item}){
        temp = -1;
        if (item != null){ temp = item.id }
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            modalID: temp
        });
    }

    RenderJobCard({item}){
        return (
            <Card>
                <CardBody>
                    <CardTitle>{item.company}</CardTitle>
                    <CardSubtitle>{item.position}</CardSubtitle>
                    <CardText>{item.description}</CardText>
                    <Button onClick={this.toggleModal(item)}>see more</Button>
                </CardBody>   
            </Card>
        );
    }
    
    render() {
        return(
        //iterate db and make cards for all jobs => <RenderJobCard item = job/>
        <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal(null)}>
            
        </Modal>
        )
    }
}
export default Job;