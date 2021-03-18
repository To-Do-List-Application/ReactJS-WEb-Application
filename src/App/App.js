import React, {Component} from 'react';
import './App.css';
import PageHeader from '../Components/PageHeader';
import TaskAdd from '../Components/TaskAdd'
import TaskItemList from '../Components/TaskItemList';
import {Container, Row, Col} from 'reactstrap';
import CompletedTaskList from '../Components/CompletedTaskList';

class App extends Component {

    constructor(props) {
        //super class
        super(props);
        //this
        this.state = {
            //itemlist
            taskItemList: [
               //itemlist
            ],
            //additem
            taskToBeAddItem: ""
        };
    }

    //TASK IS COMPLETE OR NOT
    taskMarkComplete = id => {
        //this
        this.setState({
            //task
            taskItemList: this.state.taskItemList.map(item => {
                //item
                if (id === item.id) {
                    //return
                    return {
                        ...item,
                        //completed
                        completed: !item["isCompleted"]
                    };
                }
                //return
                return item;
            })
        });
        //print
        console.log('Clicked');
    };
//itemtask
    taskItemIdLast = 0;

    //ITEM ID SET
    taskItemIdNew = () => {
        //id
        const id = this.taskItemIdLast;
        //this
        this.taskItemIdLast += 1;
        //return
        return id;
    };

    //TASK IS EDITING OR NOT
    taskToggleIsEditingAt = id => {
        //editing
        console.log("isEditingAt", id);
        //this
        this.setState({
            //itemlist
            taskItemList: this.state.taskItemList.map(item => {
                //itemid
                if (id === item.id) {
                    //return
                    return {
                        ...item,
                        //isediting condition
                        isEditing: !item["isEditing"]
                    };
                }
                //return item
                return item;
            })
        });
    };

    //TASK INPUT HANDLE
    taskHandleItemInput = e => {
        //this
        this.setState({
            //additem
            taskToBeAddItem: e.target.value
        })
    };

    //HANDLE EDITING ITEMS
    taskSetNameAt = (name, id) => {
        //this
        this.setState({
            //itemlist
            taskItemList: this.state.taskItemList.map(item => {
                if (id === item.id) {
                    return {
                        ...item,
                        name
                    };
                }
                return item;
            })
        });
    };

    //TASK SUBMIT HANDLER
    taskItemSubmitHandler = e => {
        //default
        e.preventDefault();
        //id
        const id = this.taskItemIdNew();
        //this
        this.setState({
            //itemlist
            taskItemList: [
                {
                    // name
                    name: this.state.taskToBeAddItem,
                    isEditing: false,
                    // completed
                    completed: false,
                    id
                },
                ...this.state.taskItemList
            ],
            taskToBeAddItem: ""
        });
    };

    //TASK REMOVING HANDLER
    taskRemoveItemAt = id => {
        // set state
        this.setState({taskItemList: this.state.taskItemList.filter(item => id !== item.id)});
    };
// render react
    render() {
        // return
        return (
            // open div
            <div className="Itemmain-container">
                {/*container*/}
                <Container fluid={true}>
                    {/*open div*/}
                    <div className="ItemApp-wrapper">
                        {/*header*/}
                        <PageHeader/>
                        {/*open div*/}
                        <div className="Itembottom-wrapper">
                            <Row>
                                <Col lg="6" xl="6">
                                    <TaskAdd
                                        taskHandleItemInput={this.taskHandleItemInput}
                                        taskItemSubmitHandler={this.taskItemSubmitHandler}
                                        taskToBeAddItem={this.state.taskToBeAddItem}
                                    />
                                </Col>
                                <Col lg="6" xl="6">
                                    <h5>Items List</h5>
                                    <div className="itemtaskList-wrapper itemTaskList not notDiv" >
                                        <TaskItemList
                                            taskItemList={this.state.taskItemList}
                                            taskRemoveItemAt={this.taskRemoveItemAt}
                                            taskToggleIsEditingAt={this.taskToggleIsEditingAt}
                                            taskSetNameAt={this.taskSetNameAt}
                                            taskMarkComplete={this.taskMarkComplete}
                                        />
                                        <CompletedTaskList
                                            taskItemList={this.state.taskItemList}
                                            taskRemoveItemAt={this.taskRemoveItemAt}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default App;
