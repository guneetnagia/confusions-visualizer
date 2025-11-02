export interface Scenario {
  id: number;
  description: string;
  details: string;
  actualValue: boolean;
  category: string;
  image?: string;
}

export const medicalScenarios: Scenario[] = [
  {
    id: 1,
    description: "Patient A",
    details: "Age 65, chest pain, shortness of breath, high blood pressure",
    actualValue: true,
    category: "medical"
  },
  {
    id: 2,
    description: "Patient B",
    details: "Age 25, regular exercise, normal vitals, yearly checkup",
    actualValue: false,
    category: "medical"
  },
  {
    id: 3,
    description: "Patient C",
    details: "Age 55, diabetes, family history of heart disease, fatigue",
    actualValue: true,
    category: "medical"
  },
  {
    id: 4,
    description: "Patient D",
    details: "Age 30, no symptoms, healthy lifestyle, normal ECG",
    actualValue: false,
    category: "medical"
  },
  {
    id: 5,
    description: "Patient E",
    details: "Age 70, irregular heartbeat, previous heart attack, smoker",
    actualValue: true,
    category: "medical"
  },
  {
    id: 6,
    description: "Patient F",
    details: "Age 22, athlete, no medical history, routine screening",
    actualValue: false,
    category: "medical"
  },
  {
    id: 7,
    description: "Patient G",
    details: "Age 60, high cholesterol, chest discomfort, stress test abnormal",
    actualValue: true,
    category: "medical"
  },
  {
    id: 8,
    description: "Patient H",
    details: "Age 35, vegetarian, daily yoga, excellent health markers",
    actualValue: false,
    category: "medical"
  },
  {
    id: 9,
    description: "Patient I",
    details: "Age 58, overweight, sedentary lifestyle, pre-diabetic",
    actualValue: true,
    category: "medical"
  },
  {
    id: 10,
    description: "Patient J",
    details: "Age 28, marathon runner, low resting heart rate, healthy",
    actualValue: false,
    category: "medical"
  }
];

export const spamScenarios: Scenario[] = [
  {
    id: 1,
    description: "Email #1",
    details: "Congratulations! You've WON $1,000,000! Click here NOW!!!",
    actualValue: true,
    category: "spam"
  },
  {
    id: 2,
    description: "Email #2",
    details: "Hi John, thanks for your email. I'll send the report by Friday.",
    actualValue: false,
    category: "spam"
  },
  {
    id: 3,
    description: "Email #3",
    details: "URGENT: Your account will be suspended! Update payment info immediately!",
    actualValue: true,
    category: "spam"
  },
  {
    id: 4,
    description: "Email #4",
    details: "Meeting reminder: Project review tomorrow at 2 PM in Conference Room B",
    actualValue: false,
    category: "spam"
  },
  {
    id: 5,
    description: "Email #5",
    details: "Hot singles in your area want to meet you! Sign up free now!",
    actualValue: true,
    category: "spam"
  },
  {
    id: 6,
    description: "Email #6",
    details: "Your Amazon order #12345 has shipped. Track your package here.",
    actualValue: false,
    category: "spam"
  },
  {
    id: 7,
    description: "Email #7",
    details: "You are the LUCKY WINNER! Claim your FREE iPhone now before it expires!",
    actualValue: true,
    category: "spam"
  },
  {
    id: 8,
    description: "Email #8",
    details: "Quarterly financial report attached. Please review before Monday's meeting.",
    actualValue: false,
    category: "spam"
  },
  {
    id: 9,
    description: "Email #9",
    details: "Weight loss miracle! Lose 50 lbs in 2 weeks! Doctors HATE this trick!",
    actualValue: true,
    category: "spam"
  },
  {
    id: 10,
    description: "Email #10",
    details: "Mom's birthday is next week. Don't forget to call her!",
    actualValue: false,
    category: "spam"
  }
];
