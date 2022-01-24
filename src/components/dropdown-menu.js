import * as React from 'react'
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import {
  menuItem,
  menuToggle,
  subMenu
} from './dropdown-menu.module.css'

const DropdownMenu = ({ title, base, children }) => {

  const [menuExpanded, setMenuExpanded] = useState(false);
  const [active, setActive] = useState(false);

  const toggleButton = useRef(null);

  useEffect(() => {
    let path = window.location.pathname;
    if (path.includes(base)) {
      setActive(true);
    }
  }, [base]);

  const handleClick = (event) => {
    setMenuExpanded(!menuExpanded);
  }

  const handleFocus = (event) => {
    if (!menuExpanded) {
      setMenuExpanded(true);
    } 
  }

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      if (menuExpanded) {
        setMenuExpanded(false); 
      }
    }
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      toggleButton.current?.focus();
      setMenuExpanded(false);
    }
  }

  const handleMouseEnter = (event) => {
    setMenuExpanded(true);
  }

  const handleMouseLeave = (event) => {
    setTimeout(() => {
      setMenuExpanded(false);
    }, 300);
  }

  return (
    <li
      className={menuItem}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={toggleButton}
        className={menuToggle}
        active={active ? 'active' : '' }
        aria-expanded={menuExpanded}
        onClick={handleClick}
        onFocus={handleFocus}
      >
        { title } <FontAwesomeIcon icon={faCaretDown} size='1x' />
        </button>
        <ul className={subMenu}>
          { children }
        </ul>
    </li>
  )
}

export default DropdownMenu