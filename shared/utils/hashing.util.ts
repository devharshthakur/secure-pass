import * as crypto from "node:crypto";

/**
 * Utilities classses for hashing labels. We use SHA-256 to hash the labels before storing the label in plain text.
 */

export class HashingUtil {
  /**
   * Hashes a lebel using SHA-256
   * @param label - The label to hash
   * @returns A hexadecimal hash string
   */

  hashLabel(label: string): string {
    return crypto.createHash("sha256").update(label).digest("hex");
  }
}
