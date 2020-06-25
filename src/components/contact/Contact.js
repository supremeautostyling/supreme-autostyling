import React, { Component } from "react";
import "./Contact.css";

const INIT_STATE = {
  status: null,
  name: "",
  _replyto: "",
  _subject: "",
  message: "",
};

class Contact extends Component {
  constructor(props) {
    super(props);

    this.contactRef = React.createRef();

    this.state = { ...INIT_STATE };
  }

  componentDidMount() {
    this.props.setRef(this.contactRef.current);
  }

  changeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();

    const { status, ...data } = this.state;

    fetch("https://formspree.io/sup.autostyling@gmail.com", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Network response error");
        }

        return res.json();
      })
      .then((res) => {
        if (res.ok) {
          this.setState({
            status: "success",
            name: "",
            _replyto: "",
            _subject: "",
            message: "",
          });

          //setTimeout(() => {}, 2000);
        } else {
          this.setState({
            status: "error",
          });
        }
      })
      .catch((err) => console.log("Error: ", err));
  };

  resetStatus = (e) => {
    this.setState({ status: null });
  };

  render() {
    const { name, _replyto, _subject, message, status } = this.state;
    return (
      <section id="contact" ref={this.contactRef}>
        <div className="d-flex align-items-center">
          <div className="mr-auto">
            <h1>Contact</h1>
          </div>
          {status !== null && (
            <div
              className={status === "success" ? "mssg succ" : "mssg err"}
              onAnimationEnd={this.resetStatus}
            >
              <small>{status === "success" ? "Thanks" : "Error"}</small>
            </div>
          )}
        </div>

        <form id="contact-form" onSubmit={this.submitForm}>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="John Doe"
            required
            value={name}
            onChange={this.changeInput}
          />

          <input
            type="email"
            name="_replyto"
            className="form-control"
            placeholder="email@yourAddress.com"
            required
            value={_replyto}
            onChange={this.changeInput}
          />

          <input
            type="text"
            name="_subject"
            className="form-control"
            placeholder="What's the message about?"
            required
            value={_subject}
            onChange={this.changeInput}
          />

          <textarea
            name="message"
            value={message}
            rows="4"
            className="form-control"
            required
            onChange={this.changeInput}
          />

          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <button className="btn btn-primary">Send</button>
        </form>
      </section>
    );
  }
}

export default Contact;
