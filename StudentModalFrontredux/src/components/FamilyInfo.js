// FamilyInfo.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FamilyInfo = ({ familyMembers, setStudent }) => {

    const updateFamilyMember = (index, field, value) => {
        setStudent((prevStudent) => {
          const updatedFamily = [...prevStudent.familyMembers];
          updatedFamily[index] = { ...updatedFamily[index], [field]: value };
          return { ...prevStudent, familyMembers: updatedFamily };
        });
      };
    
      // Define removeFamilyMember function to remove a family member
      const removeFamilyMember = (index) => {
        setStudent((prevStudent) => {
          const updatedFamily = prevStudent.familyMembers.filter((_, i) => i !== index);
          return { ...prevStudent, familyMembers: updatedFamily };
        });
      };

  const handleAddFamilyMember = () => {
    const newMember = { name: '', relationship: '', nationality: '' };
    setStudent((prev) => ({ ...prev, familyMembers: [...prev.familyMembers, newMember] }));
  };

  return (
    <div>
      <h5>Family Members</h5>
      {familyMembers.map((member, index) => (
        <Form key={index}>
          <Form.Group controlId={`familyMemberName${index}`}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={member.name}
              onChange={(e) => updateFamilyMember(index, 'name', e.target.value)}
            />
          </Form.Group>
          {/* Other fields for relationship and nationality */}
          <Button variant="danger" onClick={() => removeFamilyMember(index)}>Delete</Button>
        </Form>
      ))}
      <Button variant="secondary" onClick={handleAddFamilyMember}>Add Family Member</Button>
    </div>
  );
};

export default FamilyInfo;
