'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { routes } from '@/shared/lib/routing';
import { Button } from '@/shared/ui/btn-base';

import styles from './styles.module.scss';

export const SignInBtn: React.FC = () => (
  <Button>
    <Link href={routes.signin} className={styles.link}>
      <Image
        width={21.5}
        height={21.5}
        src="/icons/common/profile.svg"
        alt="Войти"
      />
      <span>Войти</span>
    </Link>
  </Button>
);
