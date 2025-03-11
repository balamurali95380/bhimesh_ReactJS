import { Component } from "react";

export default class Crud3 extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fname: "",
        lname: "",
        email: "",
        gender: "",
        prefr: [],
      },
      arr: [],
      indx1: null,
    };
  }

  handleevent = (e) => {
    const { name, value, type, checked } = e.target;
    const person = { ...this.state.person };

    if (type === "checkbox" && name === "preference") {
      // Handling checkboxes manually using DOM
      if (checked) {
        person.prefr.push(value);
      } else {
        person.prefr = person.prefr.filter((item) => item !== value);
      }
    } else if (type === "radio") {
      person[name] = value;
    } else {
      person[name] = value;
    }

    this.setState({ person });
  };

  adduser = () => {
    const allCheckBoxes = document.getElementsByName("preference");
    const selectedPreferences = [];
    for (let i = 0; i < allCheckBoxes.length; i++) {
      if (allCheckBoxes[i].checked) {
        selectedPreferences.push(allCheckBoxes[i].value);
      }
      allCheckBoxes[i].checked = false;
    }

    const user = { ...this.state.person, prefr: selectedPreferences };
    const arr = [...this.state.arr, user];
    this.setState({ arr });
    this.clearform();
  };

  deletetuser(i) {
    const ar1 = [...this.state.arr];
    ar1.splice(i, 1);
    this.setState({ arr: ar1 });
  }

  edituser(val, i) {
    this.setState({ person: val, indx1: i });
  }

  clearform() {
    this.setState({
      person: { fname: "", lname: "", email: "", gender: "", prefr: [] },
      indx1: null,
    });
  }

  updateUser = () => {
    const ar2 = [...this.state.arr];
    ar2[this.state.indx1] = this.state.person;
    this.setState({ arr: ar2 });
    this.clearform();
  };

  render() {
    return (
      <div>
        <form>
          <label>First Name:</label>
          <input
            type="text"
            name="fname"
            value={this.state.person.fname}
            onChange={this.handleevent}
          />
          <br />

          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            value={this.state.person.lname}
            onChange={this.handleevent}
          />
          <br />

          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.person.email}
            onChange={this.handleevent}
          />
          <br />

          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={this.state.person.gender === "Male"}
            onChange={this.handleevent}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={this.state.person.gender === "Female"}
            onChange={this.handleevent}
          />
          Female
          <br />

          <label>Preferences:</label>
          <input
            type="checkbox"
            name="preference"
            value="Reading"
            onChange={this.handleevent}
          />
          Reading
          <input
            type="checkbox"
            name="preference"
            value="Traveling"
            onChange={this.handleevent}
          />
          Traveling
          <input
            type="checkbox"
            name="preference"
            value="Sports"
            onChange={this.handleevent}
          />
          Sports
          <br />

          {this.state.indx1 === null ? (
            <button type="button" onClick={this.adduser}>
              Add User
            </button>
          ) : (
            <button type="button" onClick={this.updateUser}>
              Update User
            </button>
          )}
        </form>
        <hr />
        <table border={1}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Preferences</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arr.map((val, i) => (
              <tr key={i}>
                <td>{val.fname}</td>
                <td>{val.lname}</td>
                <td>{val.email}</td>
                <td>{val.gender}</td>
                <td>{val.prefr}</td>
                <td>
                  <button type="button" onClick={() => this.edituser(val, i)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => this.deletetuser(i)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
