import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Container from "../Navbar/container/Container";








 const Login = (props:any) => {

  const schema = Yup.object().shape({
    
    email : Yup.string()
    .required("ایمیل الزامی است")
    .email('ایمیل درست نیست')
    ,
    
    pass : Yup.string()
    .required('the pass is necessary')
    .min(8,'more than 8 character')
    .matches(/[a-z]+/)
    .matches(/[A-Z]+/)
    .matches(/\d+/)
    
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
  <div className="w-full max-w-md mx-auto mt-12 bg-white rounded-xl shadow-lg p-6 sm:p-8">
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 sm:gap-6 text-center "
    >
      <h2 className="text-xl sm:text-2xl font-extrabold text-center text-gray-800 mb-4">
        ثبت نام کاربر جدید
      </h2>

      {/* هر فیلد با لِیبل و اینپوت */}
        


      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 font-semibold text-gray-700 text-sm sm:text-base">
          ایمیل
        </label>
        <input
          id="email"
          {...register("email")}
          type="email"
          className="border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ltr text-sm sm:text-base"
          placeholder="example@mail.com"
          autoComplete="off"
        />
        {errors.email && (
          <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="pass" className="mb-1 font-semibold text-gray-700 text-sm sm:text-base">
          رمز عبور
        </label>
        <input
          id="pass"
          {...register("pass")}
          type="password"
          className="border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ltr text-sm sm:text-base"
          placeholder="حداقل ۸ کاراکتر"
          autoComplete="new-password"
        />
        {errors.pass && (
          <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.pass.message}</p>
        )}
      </div>

      

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white py-3 rounded-md font-bold text-base sm:text-lg hover:bg-blue-700 transition"
      >
        ثبت نام
      </button>
    </form>
  </div>
</Container>


     </>
  )
}



export default Login ;





