import React from 'react';
import TaskName from './TaskName';
import ButtonsActions  from './ButtonsActions';

const TaskItem = (props) => {
    return(
        <li>
            <TaskName
                isEditing={props.isEditing}
                item={props.item}
                taskMarkComplete={props.taskMarkComplete}
                taskToggleIsEditingAt={props.taskToggleIsEditingAt}
                taskHandleNameEdits={e => props.taskSetName(e.target.value)}
                completed={props.completed}
            />
            <ButtonsActions
                isEditing={props.isEditing}
                taskHandleRemove={props.taskHandleRemove}
                taskMarkComplete={props.taskMarkComplete}
                taskToggleIsEditingAt={props.taskToggleIsEditingAt}
                completed={props.completed}
            />
        </li>
    )
};

export default TaskItem;