import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";

class App extends Component {
    constructor(props) {
        super(props);

        // Setting up state
        this.state = {
            userName: "",
            userAge: "",
            userList: [],
        };
      }
        // Set a user input value
    updateName(value) {
        this.setState({
            userName: value,
        });
    }
    updateAge(value) {
        this.setState({
            userAge: value,
        });
    }
    // Add item if user input in not empty
    addItem() {
        const { userName, userAge, userList } = this.state;
        if (userName !== "" && userAge !== "") {
            const user = {
                // Add a random id which is used to delete
                id: Math.random(),
                name:userName,
                age:userAge
                
            };
            

            // reset state
            this.setState({
                userList : [...userList,user],
                userName: "",
                userAge: ""
            });
        }
    }
    deleteItem(id) {
        const list = [...this.state.userList];
        const updateList = list.filter((item) => item.id !== id);
        this.setState({ userList: updateList });
}

    editItem(index) {
        const updatedList = [...this.state.userList];
        const editedName = prompt("Edit name:");
        const editedAge = prompt("Edit age:");

        if (editedName && editedAge) {
            
            updatedList[index].name = editedName;
            updatedList[index].age = editedAge;
            this.setState({ userList: updatedList });
        }
    }
    
    render() {
        return (
            <Container style={{background: "#8080803b",height: "100vh"}}>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        fontWeight: "bolder",
                    }}
                >
                    Student List
                </Row>

                <hr />
                <Row><Col md={{ span: 8, offset: 2}}><h4>Add Student Details</h4></Col></Row>
                <Row>
                    <Col md={{ span: 8, offset: 2}}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Name"
                                size="md"
                                value={this.state.userName}
                                onChange={(item) =>
                                    this.updateName(item.target.value)
                                }
                                aria-label="add something"
                                aria-describedby="basic-addon2"
                            />
                             <FormControl
                                placeholder="Age"
                                size="md"
                                value={this.state.userAge}
                                onChange={(item) =>
                                    this.updateAge(item.target.value)
                                }
                                aria-label="add something"
                                aria-describedby="basic-addon2"
                            />
                            
                                <Button
                                    variant="dark"
                                    
                                    onClick={() => this.addItem()}
                                >
                                    ADD
                                </Button>
                            
                        </InputGroup>
                    </Col>
                </Row>
               
                <Row>
                  <Col md={{ span: 8, offset: 2 }}>
                        <Table bordered>
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.userList.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>
                                    <Button
                                        variant="dark"
                                        style={{ marginRight: "10px" }}
                                        onClick={() => this.deleteItem(item.id)}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        variant="dark"
                                        onClick={() => this.editItem(index)}
                                    >
                                        Edit
                                    </Button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </Table>

                    </Col>
                </Row>
            </Container>
        );
    }
  }


export default App;
