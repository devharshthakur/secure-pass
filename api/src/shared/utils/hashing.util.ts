import * as crypto from 'crypto';

export class HashingUtil {
  hashLabel(label: string): string {
    return crypto.createHash('sha256').update(label).digest('hex');
  }
}
