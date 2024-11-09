// RoleDropdown.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserRole } from '../redux/actions';
import Dropdown from 'react-bootstrap/Dropdown';

const RoleDropdown = () => {
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.userRole);

  const handleRoleChange = (role) => {
    dispatch(setUserRole(role));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-role">
        {userRole}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleRoleChange('Admin')}>Admin</Dropdown.Item>
        <Dropdown.Item onClick={() => handleRoleChange('Registrar')}>Registrar</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default RoleDropdown;
