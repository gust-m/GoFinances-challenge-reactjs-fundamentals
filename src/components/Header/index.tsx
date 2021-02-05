import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const buttonsDefault = [
  { title: 'Listagem', route: '/', isActive: true },
  { title: 'Importar', route: '/import', isActive: false },
];

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [buttons, setButtons] = useState(buttonsDefault);
  const url = window.location.pathname;
  const setSelected = (): void => {
    setButtons(buttons.map(button => ({ ...button, isActive: button.route === url })));
  };

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          {buttons.map(button => (
            <Link key={button.title} to={button.route} onClick={setSelected}>
              {button.title}
              <p className={button.route === url ? 'selected' : ''} />
            </Link>
          ))}
        </nav>
      </header>
    </Container>
  );
};

export default Header;
