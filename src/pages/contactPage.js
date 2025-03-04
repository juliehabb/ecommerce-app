import React, { useState } from "react";
import { 
    ContactContainer, ContactForm, FormGroup, Label, Input, TextArea, SubmitButton, ErrorMessage
} from "../styling/general.js";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });
  const [errors, setErrors] = useState({});
  
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    let newErrors = {};
    if (formData.fullName.length < 3) newErrors.fullName = "Full name must be at least 3 characters long.";
    if (formData.subject.length < 3) newErrors.subject = "Subject must be at least 3 characters long.";
    if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (formData.body.length < 3) newErrors.body = "Body must be at least 3 characters long.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ fullName: "", subject: "", email: "", body: "" });
      setErrors({});
    }
  };

  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Full Name</Label>
          <Input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label>Subject</Label>
          <Input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label>Body</Label>
          <TextArea name="body" value={formData.body} onChange={handleChange} required />
          {errors.body && <ErrorMessage>{errors.body}</ErrorMessage>}
        </FormGroup>
        
        <SubmitButton type="submit">Submit</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactPage;