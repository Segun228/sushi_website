import style from "./register-form.module.css"
import ActionButton from "../actionButton/ActionButton";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setAuthentification, setUserAuthActivity, setUserInfo } from "../../store/mainSlice";
import { MdOutlineCancel } from "react-icons/md";

const RegisterForm = () => {
    const dispatch = useDispatch();
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
            dispatch(setUserInfo(data))
            dispatch(setAuthentification())
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
                <MdOutlineCancel className={style.cancel} onClick={()=>dispatch(setUserAuthActivity())} />
                <div className={style.title}>Регистрация</div>
                <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        className={errors.username ? style.input_err : style.input} 
                        type="text" 
                        placeholder="Введите ваше имя..." 
                        {...register('username', {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 3,
                                message: "Слишком короткое имя"
                            },
                            maxLength: {
                                value: 20,
                                message: "Слишком длинное имя"
                            },
                        })}
                    />
                    {errors.username && <div className={style.error_warning}>{errors.username.message}</div>}
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
                    placeholder="Создайте пароль..."
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
                    <input 
                    className={errors.confirm ? style.input_err : style.input} 
                    type="password" 
                    placeholder="Подтвердите ваш пароль..." 
                    {...register('confirm', {
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
                        validate: (value) =>
                            value === password || "Пароли не совпадают"
                    })}
                    />
                    {errors.confirm && <div className={style.error_warning}>{errors.confirm.message}</div>}
                    <div className={style.checkboxContainer}>
                        <input 
                        className={style.check} 
                        type="checkbox" 
                        id="myCheckbox"
                        {...register('joke', {
                            required: "Поле обязательно к подтверждению",
                        })}
                        />
                        <label className={style.checkboxCaption} for="myCheckbox">Даю согласие на досавку мне вкусных ролов</label>
                    </div>
                    {errors.joke && <div className={style.error_warning}>{errors.joke.message}</div>}
                    <ActionButton disabled={errors} message={isSubmitting ? "Загрузка..." : "Отправить"} type="submit"></ActionButton>
                </form>
            </div>
        </div>
    );
}
export default RegisterForm;