import React from 'react';
import {Button, Form, FormGroup, Input} from 'reactstrap';

const TaskAdd = (props) => {
    return (
        <div className="addItemTask-wrapper">
            {/*topic*/}
            <h5>Add item</h5>
            {/*start additem tab*/}
            <div className="addItem-inside">
                {/*add item form*/}
                <Form
                    className="form"
                    onSubmit={props.taskItemSubmitHandler}
                >
                    {/*add form group to get input*/}
                    <FormGroup>
                        <Input
                            type="text"
                            onChange={props.taskHandleItemInput}
                            value={props.taskToBeAddItem}
                            // add  pleseholder
                            placeholder="Please enter a item"
                        />
                        {/*closed form group*/}
                    </FormGroup>
                    {/*add a submit button*/}
                    <Button
                        className="subitemNew"
                        disabled={!props.taskToBeAddItem}
                        type="submit"
                        name="submit"
                        value="submit">
                        ADD ITEM
                    </Button>
                    {/*close form*/}
                </Form>
            </div>
        </div>
    )
}

export default TaskAdd;