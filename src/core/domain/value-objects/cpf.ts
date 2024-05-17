export class CPF {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): CPF {
    if (!this.isValid(value)) {
      throw new Error("CPF Inválido");
    }
    return new CPF(value);
  }

  public getValue(): string {
    return this.value;
  }

  private static isValid(value: string): boolean {
    const cpfRegex = /^[0-9]{11}$/;
    return cpfRegex.test(value);
  }
}
