interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
  const totalCredits = subject1 + subject2;

  const result: MajorCredits = {
    credits: totalCredits,
    brand: 'Major Credits',
  };

  return result;
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
  const totalCredits = subject1 + subject2;

  const result: MinorCredits = {
    credits: totalCredits,
    brand: 'Minor Credits',
  };

  return result;
}
