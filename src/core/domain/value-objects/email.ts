export class Email {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): Email {
    if (!this.isValid(value)) {
      throw new Error("Email inválido");
    }
    return new Email(value);
  }

  public getValue(): string {
    return this.value;
  }

  private static isValid(value: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }
}
