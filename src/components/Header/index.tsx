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
    setButtons(buttons.map(i => ({ ...i, isActive: i.route === url })));
  };

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          {buttons.map(i => (
            <Link key={i.title} to={i.route} onClick={setSelected}>
              {i.title}
              <p className={i.route === url ? 'selected' : ''} />
            </Link>
          ))}
        </nav>
      </header>
    </Container>
  );
};

export default Header;
