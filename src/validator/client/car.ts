import * as Yup from "yup";

const carSchema = Yup.object().shape({
  title: Yup.string().min(3, 'حداقل باید ۳ کاراکتر داشته باشد').max(30, 'حداکثر مجاز ۳۰ کاراکتر است').required('این فیلد اجباری است'),
  carStatus: Yup.string().required('این فیلد اجباری است'),
  price: Yup.number().required('این فیلد اجباری است'),
  company: Yup.string().required('این فیلد اجباری است'),
  model: Yup.string().required('این فیلد اجباری است'),
  userId: Yup.string().required('این فیلد اجباری است'),
  years: Yup.number().required('این فیلد اجباری است'),
  work: Yup.number().required('این فیلد اجباری است'),
  platform: Yup.string().required('این فیلد اجباری است'),
  fuel: Yup.string().required('این فیلد اجباری است'),
  gearbox: Yup.string().required('این فیلد اجباری است'),
  color: Yup.string().required('این فیلد اجباری است'),
  description: Yup.string().min(10, 'حداقل باید ۱۰ کاراکتر داشته باشد').max(1000, 'حداکثر مجاز ۱0۰۰ کاراکتر است').required('این فیلد اجباری است'),
  firstname: Yup.string().required('این فیلد اجباری است'),
  lastname: Yup.string().required('این فیلد اجباری است'),
  phone: Yup.number().required('این فیلد اجباری است'),
});

export default carSchema;
