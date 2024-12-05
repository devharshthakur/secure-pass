import * as crypto from "node:crypto";

/**
 * Utility clsses for encrypting and decrypting strings using AES-256-CBC
 */

export class EcryptUtil {
  private readonly algorithm: string = "aes-256-cbc";
  private readonly key: Buffer;

  constructor() {
    const password = "my-password";
    const salt = "my-salt-value";
    this.key = crypto.scryptSync(password, salt, 32);
  }

  /**
   * Encrypts a plaintext string
   * @param text - The plaintext to encrypt.
   * @returns The encrypted string in hex format: iv:encrypted
   */
  encrypt(text: string): string {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);
    const encrypted = Buffer.concat([
      cipher.update(text, "utf8"),
      cipher.final(),
    ]);
    return iv.toString("hex") + ":" + encrypted.toString("hex");
  }

  /**
   * Decrypts an encrypted string.
   * @params encryptedText
   * @returns The decrypted plaintext string
   */

  decrypt(encryptedText: string): string {
    const [ivHex, encryptedHex] = encryptedText.split(":");
    const iv = Buffer.from(ivHex, "hex");
    const encrypted = Buffer.from(encryptedHex, "hex");

    const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);
    const decrypted = Buffer.concat([
      decipher.update(encrypted),
      decipher.final(),
    ]);
    return decrypted.toString("utf-8");
  }
}
