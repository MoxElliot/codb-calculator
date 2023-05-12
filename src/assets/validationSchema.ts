import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please Enter Valid Email Address').required('Required!')
  })

  
export default validationSchema