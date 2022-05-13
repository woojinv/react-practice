import React, { useState } from "react";

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastChange(e) {
    setLastName(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }
  
  return (
    <form>
      <label>
        First name:{' '}
        {isEditing ? <input name="firstName" value={firstName} placeholder={firstName} onChange={handleFirstChange} /> : <b>{firstName}</b>}
      </label>
      <label>
        Last name:{' '}
        {isEditing ? <input name="lastName" value={lastName} placeholder={lastName} onChange={handleLastChange}  /> : <b>{lastName}</b>}
      </label>
      <button onClick={handleClick} type="submit">
        {isEditing ? "Save Profile" : "Edit Profile"}
      </button>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );
}
