// src/types.ts

export type Quote = {
    id: number;
    name: string;
    expiryDate: string; // Use a string for simplicity (you can parse it to Date if needed)
    status: 'valid' | 'expired';
    totalAmount: number;
    files: string[]; // Array of file names or links
    tables: any[]; // Define the structure for tables as needed
  };
  