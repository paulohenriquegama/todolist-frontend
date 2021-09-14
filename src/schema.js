import * as Yup from 'yup';

export default Yup.object().shape({
  titulo: Yup.string().min(2).required(),
  desc: Yup.string().min(3),
  prioridade: Yup.string().required(),
  status: Yup.string().required(),
  prazo: Yup.date().required()
})