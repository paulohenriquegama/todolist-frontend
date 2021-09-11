import React from 'react'
import { Formik, Field, Form } from 'formik'
import './create.css'
import Api from '../../api/api'

const Create = () => {
  const onSubmit = async (values, actions) => {
    console.log(values.prazo)
    await Api.post('/add', values).then(tarefa => {
      console.log('Submit', values)
    })
  }

  return (
    <div className="create">
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          titulo: '',
          desc: '',
          prioridade: null,
          status: '',
          prazo: '',
        }}
        render={({ values }) => (
          <Form>
            <div className='formItems'>
              <label>Titulo </label>
              <Field name="titulo" type="text" />
            </div>
            <div className='formItems'>
              <label>Descrição </label>
              <Field as="textarea" name="desc" type="text" />
              
            </div>
            <div className='formItems'>
              <label>Prioridade </label>
              <Field name="prioridade" type="number" />
            </div>
            <div className='formItems'>
              <label>Status </label>
              <Field name="status" type="text" />
            </div>
            <div className='formItems'>
              <label>Prazo </label>
              <Field name="prazo" type="date" />
            </div>
            <div>
              <button type="submit">Enviar</button>
            </div>
          </Form>
        )}
      />
    </div>
  )
}

export default Create
