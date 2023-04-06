import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import './Contacto.css'

function Contacto() {
	return (
		<div className='container'>
      <Form className='form'>
        <h1>Contacto</h1>
        <Form.Field style={{ width: 600 }}>
          <label>Nombre</label>
          <input placeholder='Nombre' />
        </Form.Field>
        <Form.Field style={{ width: 600 }}>
          <label>Apellido</label>
          <input placeholder='Apellido' />
        </Form.Field>
        <Form.Field style={{ width: 600 }}>
          <Form.Field label='Mensaje' control='textarea' rows='3' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
  </Form>
  </div>
)

}

export default Contacto;