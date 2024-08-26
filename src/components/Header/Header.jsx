import React from 'react';
import $ from 'jquery';
import './Header.css';

class Header extends React.Component {
  componentDidMount() {
    $(window).on('scroll', function() {
      if ($(window).scrollTop()) {
        $('header').addClass('sticky');
      } else {
        $('header').removeClass('sticky');
      }
    });
  }

  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
