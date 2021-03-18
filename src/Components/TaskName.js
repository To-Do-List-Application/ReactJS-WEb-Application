import React from 'react';


const TaskName = (props) => {
    return (
        <span className="inputitemSpan">
            {/*check condition*/}
            {props.isEditing ?
                // add input
                <input
                    type="text" //type text
                    value={props.item}
                    className="itemtaskInput"
                    onChange={props.taskHandleNameEdits}
                />
                :
                // paragraph
                <p
                    // style para
                    style={{'textDecoration': props.completed  ? 'line-through' : '' }}>{props.item}
                </p>
            }
            {/*span close*/}
        </span>
    )
};

export default TaskName;