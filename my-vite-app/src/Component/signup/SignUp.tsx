import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Container from "../Navbar/container/Container";








 const SignUp = (props:any) => {

  const schema = Yup.object().shape({
    name : Yup.string()
    .required('نام الزامی است') 
    ,
    lastname : Yup.string()
    .required('نام خانوادگی الزامی است')
    ,
    email : Yup.string()
    .required("ایمیل الزامی است")
    .email('ایمیل درست نیست')
    ,
    phone : Yup.string()
    .required("شماره تلفن الزامی است")
    
    ,
    pass : Yup.string()
    .required('the pass is necessary')
    .min(8,'more than 8 character')
    .matches(/[a-z]+/)
    .matches(/[A-Z]+/)
    .matches(/\d+/)
    ,
    confirmPass : Yup.string()
    .required("the ConfirmPass is necessary")
    .oneOf([Yup.ref("pass")] , ' the pass is not the same ')
 })

  const {register , handleSubmit , formState : {errors}} = useForm({
    resolver : yupResolver(schema)}
  );

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    
     <>
   <Container>
  <div className="w-full max-w-lg mx-auto mt-20 bg-white rounded-xl shadow-lg p-8 sm:p-10">
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 text-center"
      noValidate
    >
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        ثبت نام کاربر جدید
      </h2>

      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0">
        {/* ستون اول */}
        <div className="flex flex-col flex-1 space-y-6">
          <div>
            <label htmlFor="lastname" className="block mb-2 text-sm font-semibold text-gray-700">
              نام خانوادگی
            </label>
            <input
              id="lastname"
              {...register("lastname")}
              className={`w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900
                placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                transition ${errors.lastname ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="نام خانوادگی خود را وارد کنید"
              autoComplete="off"
            />
            {errors.lastname && (
              <p className="mt-1 text-xs text-red-600">{errors.lastname.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">
              ایمیل
            </label>
            <input
              id="email"
              {...register("email")}
              type="email"
              className={`w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900
                placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                transition ltr ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="example@mail.com"
              autoComplete="off"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPass" className="block mb-2 text-sm font-semibold text-gray-700">
              تکرار رمز عبور
            </label>
            <input
              id="confirmPass"
              {...register("confirmPass")}
              type="password"
              className={`w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900
                placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                transition ltr ${errors.confirmPass ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="رمز عبور را تکرار کنید"
              autoComplete="new-password"
            />
            {errors.confirmPass && (
              <p className="mt-1 text-xs text-red-600">{errors.confirmPass.message}</p>
            )}
          </div>
        </div>

        {/* ستون دوم */}
        <div className="flex flex-col flex-1 space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700">
              نام
            </label>
            <input
              id="name"
              {...register("name")}
              className={`w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900
                placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                transition ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="نام خود را وارد کنید"
              autoComplete="off"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-700">
              شماره تلفن همراه
            </label>
            <input
              id="phone"
              {...register("phone")}
              className={`w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900
                placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                transition ltr ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="مثلا: 09123456789"
              autoComplete="off"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="pass" className="block mb-2 text-sm font-semibold text-gray-700">
              رمز عبور
            </label>
            <input
              id="pass"
              {...register("pass")}
              type="password"
              className={`w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900
                placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                transition ltr ${errors.pass ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="حداقل ۸ کاراکتر"
              autoComplete="new-password"
            />
            {errors.pass && (
              <p className="mt-1 text-xs text-red-600">{errors.pass.message}</p>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg"
      >
        ثبت نام
      </button>
    </form>
  </div>
</Container>





     </>
  )
}



export default SignUp ;





