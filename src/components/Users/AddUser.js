import { Fragment, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
    const [enteredData, setEnteredData] = useState({
        username: "",
        age: ""
    });

    const [error, setError] = useState({ title: "", message: "" });

    const usernameChangeHandler = (event) => {
        setEnteredData((prevValue) => {
            return { ...prevValue, username: event.target.value };
        })
    }
    const ageChangeHandler = (event) => {
        setEnteredData((prevValue) => {
            return { ...prevValue, age: event.target.value };
        })
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredData.username.trim().length === 0 || enteredData.age.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (non - empty values)."
            });
            return;
        }
        if (+enteredData.age < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age (>0)."
            });
            return;
        }
        // console.log(enteredData);
        props.onAddUser(enteredData);
        setEnteredData({
            username: "",
            age: ""
        })
    }

    const errorHandler = () => {
        setError({
            title: '',
            message: ''

        });
    }
    return (
        <Fragment>
            {error.title !== "" && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input onChange={usernameChangeHandler} value={enteredData.username} id="username" type="text" />
                    <label htmlFor="age">Age (Years)</label>
                    <input onChange={ageChangeHandler} value={enteredData.age} id="age" type="number" />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
    )
}
export default AddUser;