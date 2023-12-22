import * as Yup from "yup";

const colorSchema = Yup.object().shape({
  name: Yup.string().min(3, 'حداقل باید ۳ کاراکتر داشته باشد').max(20, 'حداکثر مجاز 20 کاراکتر است').required('این فیلد اجباری است'),
  carStatus: Yup.string().required('این فیلد اجباری است'),
  hex: Yup.string().required('این فیلد اجباری است'),

});

export default colorSchema;
