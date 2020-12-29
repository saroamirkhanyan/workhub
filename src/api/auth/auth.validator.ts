import { signInSchema, signUpSchema } from './auth.schema';
export default class AuthValidator {
  /**
   *
   * @param data
   *
   */
  public static signIn(data) {
    const schema = signInSchema;
    return schema.validate(data);
  }
  /**
   *
   * @param data
   *
   */
  public static signUp(data) {
    const schema = signUpSchema;
    return schema.validate(data);
  }
}
