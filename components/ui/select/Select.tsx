"use client";

import React, { useState, useRef } from "react";
import { FiChevronDown, FiCheck } from 'react-icons/fi';

import styles from './select.module.scss';
import classNames from 'classnames';
import { useClickOutside } from '@/hooks/useClickOutside';

interface Option {
  label: string
  value: string
}

export type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export type Size = "sm" | "md" | "lg" | "xl";

interface SelectorProps<T> {
  name: T
  options: Option[]
  value: string
  defaultValue?: string
  position?: Position
  label?: string
  onChange?: (value: string, name: T) => void
  className?: string
  size?: Size
}

const Select = <T extends string | number>(props: SelectorProps<T>) => {
  const {
    name,
    options,
    value,
    defaultValue,
    onChange,
    label,
    className,
    position = "bottom-left",
    size = "sm"
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(selectRef, () => setIsOpen(false))

  const handleChange = (value: string) => {
    onChange?.(value, name);
    setIsOpen(false);
  }

  return (
    <div 
      className={classNames(styles.select, isOpen && styles.open, className)}
      ref={selectRef}
    >
      <div onClick={() => setIsOpen(prev => !prev)} className={styles.label}>
        <span className={styles.value}>{label}</span>
        <span className={styles.arrow}><FiChevronDown /></span>
      </div>
      <div className={classNames(styles.options, styles[position], styles[size])}>
        {options.map((option) => (
          <div 
            onClick={() => handleChange(option.value)} 
            key={option.value} 
            className={classNames(styles.option, option.value === value && styles.selected)}
          >
            {option.label}
            {option.value === value && (
              <span className={styles.check}>
                <FiCheck />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;