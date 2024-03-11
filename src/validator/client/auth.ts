import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "حداقل طول نام کاربری باید 3 کاراکتر باشد")
    .max(40, "حداکثر طول نام کاربری باید 40 کاراکتر باشد")
    .required("ایمیل الزامی است"),
  password: Yup.string()
    .min(8, "حداقل طول رمزعبور باید 8 کاراکتر باشد")
    .max(20, "حداکثر طول رمزعبور باید 20 کاراکتر باشد")
    .required("رمزعبور الزامی است"),
});

////////////////////////////////////////////////////

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "حداقل طول نام کاربری باید 3 کاراکتر باشد")
    .max(40, "حداکثر طول نام کاربری باید 40 کاراکتر باشد")
    .required("ایمیل الزامی است"),
  firstname: Yup.string()
    .min(2, "حداقل طول نام باید 2 کاراکتر باشد")
    .max(20, "حداکثر طول نام باید 20 کاراکتر باشد")
    .required("نام الزامی است"),
  lastname: Yup.string()
    .min(3, "حداقل طول نام خانوادگی باید 3 کاراکتر باشد")
    .max(20, "حداکثر طول نام خانوادگی باید 20 کاراکتر باشد")
    .required("نام خانوادگی الزامی است"),
  password: Yup.string()
    .matches(
      /^[A-Za-z]{2}@\d{6}$/,
      "رمزعبور باید شامل حروف بزرگ، حروف کوچک، عدد و نماد باشد و طول آن بین 8 تا 20 کاراکتر باشد"
    )
    .required("رمزعبور الزامی است"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "رمزعبور با تأییدیه همخوانی ندارد")
    .required("تأیید رمزعبور الزامی است"),
});

export { registerSchema, loginSchema };
