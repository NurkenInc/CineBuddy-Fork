import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { VscClose } from 'react-icons/vsc';

import { navItemsBurger } from '@/shared/consts';
import { Button } from '@/shared/ui/btn-base';

import styles from './styles.module.scss';

interface MenuProps {
  onClose: () => void;
  isOpen: boolean;
}

export const Menu: React.FC<MenuProps> = ({ onClose, isOpen }) => {
  const pathname = usePathname();

  return (
    <div className={classNames(styles.menu, isOpen && styles.open)}>
      <Button onClick={onClose} className={styles.closeBtn}>
        <VscClose size={30} />
      </Button>
      <div className={classNames('container', styles.container)}>
        <ul className="list-reset">
          {navItemsBurger.map(({ label, href }) => (
            <li
              key={href}
              className={classNames(
                styles.listItem,
                pathname === href && styles.active,
              )}
            >
              <Link href={href} className={styles.link} onClick={onClose}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
