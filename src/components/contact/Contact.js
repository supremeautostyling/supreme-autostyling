import React, { Component } from "react";
import "./Contact.css";

function NameInput() {
  return (
    <div className="input-group mb-3 pr-md-2 pr-0">
      <div className="input-group-prepend">
        <span className="input-group-text">Name</span>
      </div>
      <input type="text" name="name" className="form-control" placeholder="John Doe" required />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Email</span>
      </div>
      <input
        type="email"
        name="_replyto"
        className="form-control"
        placeholder="email@yourAddress.com"
        required
      />
    </div>
  );
}

function SubjectInput() {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Subject</span>
      </div>
      <input
        type="text"
        name="_subject"
        className="form-control"
        placeholder="What's the message about?"
        required
      />
      <input type="hidden" name="_subject" value="New submission!" />
    </div>
  );
}

function MessageInput() {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Message</span>
      </div>
      <textarea type="text" name="name" rows="4" className="form-control" required></textarea>
      <input type="hidden" name="_next" value="/" />
    </div>
  );
}

function SubmitButton() {
  return (
    <div className="d-flex justify-content-end">
      <button className="btn btn-primary">Send</button>
    </div>
  );
}

class Contact extends Component {
  constructor(props) {
    super(props);

    this.contactRef = React.createRef();

    this.state = {
      sendTo: "sup.autostyling@gmail.com",
    };
  }

  componentDidMount() {
    this.props.setRef(this.contactRef.current);
  }

  render() {
    const { sendTo } = this.state;
    return (
      <section id="contact" ref={this.contactRef}>
        <h1>Contact</h1>

        <form action={`https://formspree.io/${sendTo}`} method="POST">
          <div className="row no-gutters">
            <div className="col-md-6">
              <NameInput />
            </div>

            <div className="col-md-6">
              <EmailInput />
            </div>
          </div>

          <SubjectInput />

          <MessageInput />

          <SubmitButton />
        </form>
      </section>
    );
  }
}

export default Contact;
