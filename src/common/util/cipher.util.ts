import * as bcrypt from 'bcrypt';

export class CipherUtil {
  async encrypt(plainText: string) {
    return await bcrypt.hash(plainText, 10);
  }
}
