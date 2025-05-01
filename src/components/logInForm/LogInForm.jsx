import style from "./logInForm.module.css"
import ActionButton from "../actionButton/ActionButton";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { authentificateUser } from './../../store/mainSlice.js'
import { setUserAuthActivity, setIsLoggedIn } from "./../../store/mainSlice.js";
const LoginForm = () => {
    const dispatch = useDispatch()
    const {
        register,
        formState: {
            errors,
            isSubmitting,
        },
        reset,
        handleSubmit,
        watch,

    } = useForm({mode: "all",})

    const onSubmit = async (data)=> {
        try{
            await new Promise((resolve)=>setTimeout(resolve, 1000));
            console.log(data)
            dispatch(setUserAuthActivity())
            dispatch(authentificateUser(data))
            dispatch(setIsLoggedIn())
        }
        catch(error){
            console.error(error)
        }
        reset()
    }

    const password = watch('password');

    return ( 
        <div className={style.background}>
            <div className={style.wrapper}>
                <div className={style.title}>Вход</div>
                <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
                    <input 
                    className={errors.email ? style.input_err : style.input} 
                    type="email" 
                    placeholder="Введите вашу почту..."
                    {...register('email', {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 5,
                            message: "Слишком короткая почта"
                        },
                        maxLength: {
                            value: 40,
                            message: "Слишком длинная почта"
                        },
                        pattern: {
                            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: "Неверный формат почты"
                        },
                        
                    })}
                    />
                    {errors.email && <div className={style.error_warning}>{errors.email.message}</div>}
                    <input 
                    className={errors.password ? style.input_err : style.input} 
                    type="password" 
                    placeholder="Введите пароль..."
                    {...register('password', {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 8,
                            message: "Слишком короткий пароль"
                        },
                        maxLength: {
                            value: 40,
                            message: "Слишком длинный пароль"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g,
                            message: "Неверный формат пароля"
                        },
                    })}
                    />
                    {errors.password && <div className={style.error_warning}>{errors.password.message}</div>}
                    <ActionButton disabled={errors} message={isSubmitting ? "Загрузка..." : "Отправить"} type="submit"></ActionButton>
                </form>
            </div>
        </div>
    );
}
export default LoginForm;