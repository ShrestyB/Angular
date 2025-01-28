export interface OrderStatus {
    step: number;
    label: string;
    state: 'completed' | 'in-progress' | 'pending';
    description: string;
    tooltip: string;
  }
  