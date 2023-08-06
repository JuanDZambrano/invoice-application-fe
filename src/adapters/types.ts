export interface Company {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  taxId: string;
}

export interface CustomUser {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  isStaff: boolean;
  isActive: boolean;
  company: Company | null;
  userType: string;
}

export interface Job {
  id: string;
  name: string;
  remuneration: number;
  company: Company;
}

export interface Employee {
  id: string;
  name: string;
  company: Company;
  email: string;
  job: Job | null;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  company: Company;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
  company: Company;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  company: Company;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  unitPrice: number;
  inventory: number | null;
  category: Category | null;
  company: Company;
}

export interface Payment {
  id: string;
  name: string;
}

export interface Order {
  id: string;
  creationDate: string;
  dueDate: string;
  customer: Customer | null;
  paymentMethod: Payment | null;
  company: Company;
  status: string;
  employee: Employee | null;
  location: Location | null;
}

export interface OrderItem {
  id: string;
  amount: number;
  price: number;
  totalPrice: number;
  order: Order;
  product: Product | null;
  company: Company;
}

export interface Bill {
  id: string;
  dueDate: string;
  amount: number;
  type: string;
  company: Company;
  status: string;
}
