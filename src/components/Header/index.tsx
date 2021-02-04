import React, { useEffect, useState } from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

interface RouteParams {
  route: string;
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [currentRoute, setCurrentRoute] = useState('selected');

  const { params } = useRouteMatch<RouteParams>();

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    currentRoute === 'selected'
      ? setCurrentRoute('')
      : setCurrentRoute('selected');

    console.log(currentRoute);
  }, [params.route]);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/">
            Listagem
            <p id="1" className={currentRoute} />
          </Link>
          <Link to="/import">
            Importar
            <p id="2" />
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
