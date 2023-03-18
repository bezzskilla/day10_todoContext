import React from 'react';
import { Form } from '../Form';
import './header.css'

function Header() {
  return (
    <header>
      <Form />
    </header>
  )
}

export const MemoHeader = React.memo(Header)

