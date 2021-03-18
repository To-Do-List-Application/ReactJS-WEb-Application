import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {Button} from "reactstrap";

const completeItem = {
    fontSize: "13px",
    color: "#000000",
    bottom: "1px",
    background:"#7FFFD4",
    position: "relative",
    padding: " 0 7px"
};

class ButtonsActions extends React.Component {
    render() {
        // return button actions
        return (
            <span className="item-tools">
            {/*button completed*/}
                {this.props.completed ?
                    // for completed item
                    <span
                        className="icon completeditem disabled"
                        onClick={this.props.taskMarkComplete}>
                    {/*button start*/}
                        <Button
                            style={completeItem}
                            disabled>
                        Complete
                    </Button>
                </span> :
                    // open span
                    <span
                        className="icon complete"
                        onClick={this.props.taskMarkComplete}>
                    <Button
                        style={completeItem}>Click here to complete
                    </Button>
                        {/*span close*/}
                </span>
                }
                {/*action editing*/}
                {this.props.isEditing ?
                    <span
                        className="icon tick"
                        onClick={this.props.taskToggleIsEditingAt}>
                    {/*import icon*/}
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            color="#4BB543"/>
                </span> :
                    // start span
                    <span
                        // condition check
                        className={this.props.completed ? 'icon edit disabled' : 'icon edit'}
                        // onclick event for condition
                        onClick={this.props.completed ? undefined : this.props.taskToggleIsEditingAt}
                    >
                    <FontAwesomeIcon
                        // icon style
                        icon={faPencilAlt}/>
                </span>
                }

                <span
                    className="icon delete"
                    onClick={this.props.taskHandleRemove}>
                {/*icon style*/}
                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        // color
                        color="#d11a2a"/>
            </span>
        </span>
        )
    }
}

export default ButtonsActions;