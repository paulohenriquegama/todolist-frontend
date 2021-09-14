import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import schema from '../../schema'
import './create.css'
import Api from '../../api/api'
import { toast } from "react-toastify";


const Create = () => {
  const onSubmit = async (values, actions) => {
    console.log(values.prazo)
    await Api.post('/add', values).then(tarefa => {
      toast.success("Sucesso!");
    }).catch(() => {toast.error("Erro!");})
  }

  function validate(values) {
    const errors = {}
    if (!values.titulo) {
      errors.titulo = 'O titulo é obrigatório.'
    }

    if (!values.prioridade) {
      errors.prioridade = 'Escolha a prioridade da tarefa.'
    }

    if (!values.status) {
      errors.status = 'Escolha status da tarefa.'
    }

    if (!values.prazo) {
      errors.prazo = 'Escolha o prazo da tarefa.'
    }

    return errors
  }
  return (
    <div className="create">
      <Formik
        validationSchema={schema}
        validate={validate}
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          titulo: '',
          desc: '',
          prioridade: null,
          status: '',
          prazo: '',
        }}
        render={({ values, errors, isvalid }) => (
          <Form>
            <div className="formItems">
              <label>
                Titulo
                {errors.titulo && <abbr title={errors.titulo}>*</abbr>}
              </label>
              <Field name="titulo" type="text" className="field"/>
              <ErrorMessage name="titulo" className="field">
                {msg => <span>{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="formItems">
              <label>Descrição</label>
              <Field as="textarea" name="desc" type="text" className="fieldTextArea"/>
              <ErrorMessage name="desc">
                {msg => <span>{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="formItems">
              <label>Prioridade 
                {errors.prioridade && <abbr title={errors.prioridade}>*</abbr>}
              </label>
              <Field as="select" name="prioridade" type="text" className="field">
                <option ></option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </Field>
              <ErrorMessage name="prioridade">
                {msg => <span>{msg}</span>}
              </ErrorMessage>
              {console.log("Prioridade =", values.prioridade, typeof(values.prioridade))}
            </div>
            <div className="formItems">
              <label>Status 
                {errors.status && <abbr title={errors.status}>*</abbr>}
              </label>
              <Field as="select" name="status" type="text" className="field">
                <option ></option>
                <option value='Fazer'>Fazer</option>
                <option value='Fazendo'>Fazendo</option>
                <option value='Feito'>Feito</option>
              </Field>
              <ErrorMessage name="status">
                {msg => <span>{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="formItems">
              <label>Prazo 
                {errors.prazo && <abbr title={errors.prazo}>*</abbr>}
              </label>
              <Field name="prazo" type="date" className="field"/>
              <ErrorMessage name="prazo">
                {msg => <span>{msg}</span>}
              </ErrorMessage>
            </div>
            <div>
              <button type="submit" 
              disabled={Object.keys(errors).length}
              >
                Enviar
              </button>
            </div>
          </Form>
        )}
      />
    </div>
  )
}

export default Create
