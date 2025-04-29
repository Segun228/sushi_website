import style from "./register-form.module.css"
import ActionButton from "../actionButton/ActionButton";
const RegisterForm = () => {
    return ( 
        <div className={style.wrapper}>
            <div className={style.title}>Регистрация</div>
            <form className={style.formContainer} action="">
                <input className={style.input} type="text" placeholder="Введите ваше имя..." />
                <input className={style.input} type="email" placeholder="Введите вашу почту..." />
                <input className={style.input} type="password" placeholder="Создайте пароль..." />
                <input className={style.input} type="password" placeholder="Подтвердите ваш пароль..." />
                <ActionButton message="Отправить"></ActionButton>
            </form>
        </div>
    );
}
export default RegisterForm;