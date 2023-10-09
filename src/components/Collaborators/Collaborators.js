import { Button } from '@react-email/button';
import { Html } from '@react-email/html';
import * as React from 'react';

export default function Email() {
  return (
    <Html>
      <Button
        pX={20}
        pY={12}
        href="https://ldpt2m03ygt.typeform.com/to/EmUw5jhw"
        style={{ background: '#000', color: '#fff' }}
      >
        Click me
      </Button>
    </Html>
  );
}