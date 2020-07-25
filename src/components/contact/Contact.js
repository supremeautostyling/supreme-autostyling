import React, { Component } from "react";
import "./Contact.css";
import Fade from "react-bootstrap/Fade";

const INIT_STATE = {
  status: "", // sent email status (""=init; success=ok; danger=fail)
  name: "", // name of sender
  _replyto: "", // formspree param, email of sender
  _subject: "", // formspree param, subject of email
  message: "", // email text body
};

const formspree = "https://formspree.io/sup.autostyling@gmail.com";

let opts = {
  method: "POST",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
  body: {},
};

function EmailForm(props) {
  const { name, _replyto, _subject, message, headline } = props;
  return (
    <form id="contact-form" onSubmit={props.submitForm}>
      <p>{headline}</p>

      <div>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          title="Name"
          required
          value={name}
          onChange={props.changeInput}
        />
      </div>

      <div>
        <input
          type="email"
          name="_replyto"
          className="form-control"
          placeholder="Email"
          title="Email"
          required
          value={_replyto}
          onChange={props.changeInput}
        />
      </div>

      <div>
        <input
          type="text"
          name="_subject"
          className="form-control"
          placeholder="Subject"
          title="Subject"
          required
          value={_subject}
          onChange={props.changeInput}
        />
      </div>

      <div>
        <textarea
          name="message"
          value={message}
          placeholder="Message"
          title="Message"
          rows="4"
          className="form-control"
          required
          onChange={props.changeInput}
        />
      </div>

      <input type="text" name="_gotcha" style={{ display: "none" }} />

      <div className="d-flex align-items-center">
        <small className="text-muted font-italic mr-auto">*All fields required</small>

        <button className="btn btn-primary">
          <span className="fas fa-paper-plane mr-1" />
          <span>Send</span>
        </button>
      </div>
    </form>
  );
}

function SubmitStatus(props) {
  const { status, thanksName } = props;
  return (
    <div className="status-wrap">
      <div className={`alert alert-${props.status}`}>
        <div>
          {status === "success"
            ? `Thanks ${thanksName}, I'll get back to you ASAP!`
            : "Oops, there was an error, try sending again."}
        </div>
      </div>
    </div>
  );
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.contactRef = React.createRef();
    this.state = { ...INIT_STATE };
  }

  componentDidMount() {
    // pass dom ref on mount
    this.props.setRef(this.contactRef.current);
  }

  changeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    if (e) e.preventDefault(); // prevent default sending

    const { status, ...data } = this.state;

    //submit the form to formspree service
    fetch(formspree, { ...opts, body: JSON.stringify(data) })
      .then((res) => {
        if (res.status !== 200) throw new Error("Network response error");
        return res.json();
      })
      .then((res) => {
        // re-init state, update status
        this.setState((prev) =>
          Object.assign(prev, { ...INIT_STATE, status: "success", thanksName: prev.name })
        );
        this.updateStatus();
      })
      .catch((err) => {
        // update status
        this.setState((prev) => ({ status: prev.status.substring(0, 0) + "danger" }));
        this.updateStatus();
      });
  };

  updateStatus = () => {
    setTimeout(() => this.setState((prev) => Object.assign(prev, INIT_STATE)), 2550);
  };

  render() {
    const { name, _replyto, _subject, message, status, thanksName } = this.state;
    return (
      <section id="contact" ref={this.contactRef}>
        <h1>Contact</h1>

        <div className="form-status-wrap">
          <Fade in={status.length === 0}>
            <div>
              <EmailForm
                name={name}
                _replyto={_replyto}
                _subject={_subject}
                message={message}
                submitForm={this.submitForm}
                changeInput={this.changeInput}
                headline={"Questions, concerns, lonely? Get in touch!"}
              />
            </div>
          </Fade>

          <Fade in={status.length > 0}>
            <div>
              <SubmitStatus status={status} thanksName={thanksName} />
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Contact;
