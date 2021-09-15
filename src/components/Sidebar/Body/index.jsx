import React from 'react';
import { Container, Space } from './style';
import Item from '../Item';
import { childRoutes } from '../../../routes/sidebar-elements';

export const SidebarBody = () => (
  <Container>
    <Space />
    {childRoutes.map(({ title, icon, path, children }, index) => (
      <Item
        key={`${index + 1}`}
        title={title}
        icon={icon}
        path={path}
        elements={children}
      />
    ))}
  </Container>
);

export default SidebarBody;
