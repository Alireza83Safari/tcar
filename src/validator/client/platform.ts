import * as Yup from "yup";

const platformSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "حداقل باید ۳ کاراکتر داشته باشد")
    .max(20, "حداکثر مجاز 20 کاراکتر است")
    .required("این فیلد اجباری است"),
  code: Yup.string()
    .min(3, "حداقل باید ۳ کاراکتر داشته باشد")
    .max(20, "حداکثر مجاز 20 کاراکتر است")
    .required("این فیلد اجباری است"),
});

export default platformSchema;
