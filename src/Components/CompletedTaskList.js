import React from 'react';
import TaskItem from './TaskItem';

const CompletedTaskList = (props) => {
    return (
        <div className="completedList">
            {props.taskItemList.map((item, index) => (
                item.completed === true &&
                <TaskItem
                    key={index}
                    item={item.name}
                    isEditing={item.isEditing}
                    taskHandleRemove={() => props.taskRemoveItemAt(item.id)}
                    taskMarkComplete={() => props.taskMarkComplete(item.id)}
                    taskToggleIsEditingAt={() => props.taskToggleIsEditingAt(item.id)}
                    taskSetName={text => props.taskSetNameAt(text, item.id)}
                    completed={item.completed}
                />
            ))}
        </div>
    )
}

export default CompletedTaskList;