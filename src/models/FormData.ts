export type Gender = 'Male' | 'Female' | 'Other';
export type Hobby = 'Sports' | 'Reading' | 'Music';

export interface StudentData {
    firstName: string;
    lastName: string;
    studentEmail: string;
    gender: Gender;
    mobile: string;
    subjects: string[];
    hobbies: Hobby[];
    address: string;
    state: string;
    city: string;
    imagePath?: string;
}