import * as Yup from 'yup'

const validationSchema = Yup.object({
    email: Yup.string().email('Please Enter Valid Email Address').required('Required!'),
    company: Yup.string().required('Required!'),
    text: Yup.string().required('Required!'),
  })

  
export default validationSchema