import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    name : yup.string().required("İsim alanı zorunlu"),
    email : yup.string().email("Geçerli mail adresi giriniz").required("Email adresi zorunlu"),
    age : yup.number().positive("Pozitif bir değer giriniz").integer("Tam sayı giriniz").required("Yaş alanı zorunlu"),
    password : yup.string().required("Şifre alanı zorunlu"),
    confirmPassword : yup.string().required("Şifre tekrarı zorunlu").oneOf([yup.ref('password', yup.password)], 'Şifreler Eşleşmiyor'),
    term : yup.boolean().required("kutucugu onaylayın")
})