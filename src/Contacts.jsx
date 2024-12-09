
import './Contacts.css';
import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setResponseMessage(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section id="contact">
            <div className="contact-form" style={styles.formContainer}>
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <textarea
                        name="message"
                        placeholder="Please enter Your Requirement"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                        style={styles.textarea}
                    />
                    <button type="submit" style={styles.button}>Submit</button>
                </form>
                {responseMessage && <div style={styles.responseMessage}>{responseMessage}</div>}
            </div>
        </section>
    );
};
const styles = {
    formContainer: {
        maxWidth: '400px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    button: {
        padding: '10px',
        backgroundColor: '#5cb85c',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    responseMessage: {
        marginTop: '20px',
        color: '#333',
    }
};



export default Contact;