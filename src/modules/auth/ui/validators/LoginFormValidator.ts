import { FormValidator } from 'commons/components/form/types';
import { Login } from 'modules/auth/application/models/Login';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { ValidatorFieldUtils } from 'commons/infrastructure/ValidatorUtils';

export class LoginFormValidator implements FormValidator<Login> {
    validate(data: Login): FieldErrors<Login> {
        return {
            email: ValidatorFieldUtils.required(data.email) || ValidatorFieldUtils.email(data.email),
            password: ValidatorFieldUtils.required(data.password)
        };
    }
}